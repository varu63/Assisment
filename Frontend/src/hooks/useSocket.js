import { useEffect, useRef } from "react";

export default function useSocket(onMessage) {
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket("wss://assisment-ke6h.onrender.com");

    ws.current.onopen = () => {
      console.log("WebSocket connected");
    };

    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      onMessage(data);
    };

    ws.current.onerror = (err) => {
      console.error("WS error:", err);
    };

    ws.current.onclose = () => {
      console.log("WebSocket closed");
    };

    return () => ws.current.close();
  }, []);

  const send = (data) => {
    if (ws.current.readyState === 1) {
      ws.current.send(JSON.stringify(data));
    }
  };

  return { send };
}
