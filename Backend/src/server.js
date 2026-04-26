
const http = require("http");
const app = require("./app");
const connectDB = require("./config/db");
const setupSocket = require("./websocket/socket");
require("dotenv").config();

connectDB();

const server = http.createServer(app);
setupSocket(server);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});