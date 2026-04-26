import { getUserColor } from "../utils/getUserColor";

export default function Cell({ cell, onClick, userId }) {
  const isMine = cell.owner === userId;

  let bg = "bg-gray-200 hover:bg-gray-300";

  if (cell.owner) {
    const color = getUserColor(cell.owner);
    bg = "";
    return (
      <div
        className="w-6 h-6 rounded-sm cursor-pointer transition"
        style={{
          backgroundColor: color,
          outline: isMine ? "2px solid black" : "none",
        }}
        onClick={() => onClick(cell.cellId)}
      />
    );
  }

  return (
    <div
      className={`w-6 h-6 rounded-sm cursor-pointer transition ${bg}`}
      onClick={() => onClick(cell.cellId)}
    />
  );
}