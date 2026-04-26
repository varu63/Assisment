export default function Cell({ cell, onClick, isMine }) {
  const base = "w-6 h-6 rounded-sm cursor-pointer transition";

  const color = cell.owner
    ? isMine
      ? "bg-green-500"
      : "bg-blue-500"
    : "bg-gray-200 hover:bg-gray-300";

  return (
    <div
      className={`${base} ${color}`}
      onClick={() => onClick(cell.cellId)}
    />
  );
}