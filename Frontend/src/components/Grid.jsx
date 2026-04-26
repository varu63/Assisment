import Cell from "./Cell";

export default function Grid({ cells, onClick, userId }) {
  return (
    <div className="flex justify-center mt-10">
      <div className="grid grid-cols-20 gap-1">
        {cells.map((cell) => (
          <Cell
            key={cell.cellId}
            cell={cell}
            onClick={onClick}
            isMine={cell.owner === userId}
          />
        ))}
      </div>
    </div>
  );
}