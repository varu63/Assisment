import { useEffect, useState } from "react";
import { fetchCells } from "../services/api";
import useSocket from "../hooks/useSocket";
import Grid from "../components/Grid";

 let userId = localStorage.getItem("userId");

  if (!userId) {
  userId = "user_" + Math.floor(Math.random() * 100000);
  localStorage.setItem("userId", userId);
}

export default function Home() {
  const [cells, setCells] = useState([]);

  const { send } = useSocket((data) => {
    if (data.type === "UPDATE") {
      setCells((prev) =>
        prev.map((c) =>
          c.cellId === data.cell.cellId
            ? { ...c, owner: data.cell.owner }
            : c
        )
      );
    }

    if (data.type === "FAILED") {
      console.log("Cell already taken");
    }
  });

  useEffect(() => {
    fetchCells().then((data) => {
      // 🔥 Normalize MongoDB _id issue if present
      const formatted = data.map((c) => ({
        cellId: c.cellId,
        owner: c.owner,
      }));
      setCells(formatted);
    });
  }, []);

  const handleClick = (cellId) => {
    send({
      type: "CLAIM",
      cellId,
      userId,
    });
  };
  let userId = localStorage.getItem("userId");

  if (!userId) {
  userId = "user_" + Math.floor(Math.random() * 100000);
  localStorage.setItem("userId", userId);
}

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-center text-2xl font-bold pt-6">
        Realtime Grid
      </h1>

      <Grid cells={cells} onClick={handleClick} userId={userId} />
    </div>
  );
}