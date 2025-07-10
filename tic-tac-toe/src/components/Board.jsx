import { useState } from "react";
import Square from "./Square";

const checkWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // cols
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] };
    }
  }
  return null;
};

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winnerInfo = checkWinner(squares);
  const winner = winnerInfo?.winner;
  const winningLine = winnerInfo?.line || [];
  const isDraw = !winner && squares.every(Boolean);
  const status = winner
    ? `🎉 Winner: ${winner}`
    : isDraw
    ? "🤝 It's a draw!"
    : `Next player: ${xIsNext ? "❌ X" : "⭕ O"}`;

  function handleClick(index) {
    if (squares[index] || winner) return;
    const newSquares = [...squares];
    newSquares[index] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }

  function renderSquare(i) {
    return (
      <Square
        key={i}
        value={squares[i]}
        onClick={() => handleClick(i)}
        highlight={winningLine.includes(i)}
        disabled={!!winner || isDraw}
      />
    );
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-8 flex flex-col items-center gap-6 animate-fade-in w-[340px] max-w-full">
      <div
        className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
          winner ? "text-green-600" : isDraw ? "text-yellow-600" : "text-blue-700"
        }`}
      >
        {status}
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[...Array(9)].map((_, i) => renderSquare(i))}
      </div>
      <button
        onClick={resetGame}
        className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow hover:from-blue-600 hover:to-purple-600 transition-all duration-200 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        🔄 Reset Game
      </button>
    </div>
  );
}