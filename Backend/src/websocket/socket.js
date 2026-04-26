const WebSocket = require("ws");
const Cell = require("../models/Cell");

function setupWebSocket(server) {
  const wss = new WebSocket.Server({ server });

  wss.on("connection", (ws) => {

    ws.on("message", async (msg) => {
      const data = JSON.parse(msg);

      if (data.type === "CLAIM") {
        const { cellId, userId } = data;

        try {
          // 🔥 ATOMIC UPDATE (THIS IS EVERYTHING)
          const updated = await Cell.findOneAndUpdate(
            { cellId: cellId, owner: null },
            { owner: userId },
            { new: true }
          );

          if (!updated) {
            ws.send(JSON.stringify({
              type: "FAILED",
              cellId
            }));
            return;
          }

          // broadcast
          wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
              client.send(JSON.stringify({
                type: "UPDATE",
                cell: updated
              }));
            }
          });

        } catch (err) {
          console.error(err);
        }
      }
    });

  });
}

module.exports = setupWebSocket;