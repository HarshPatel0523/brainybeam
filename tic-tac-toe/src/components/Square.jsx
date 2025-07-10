export default function Square({ value, onClick, highlight, disabled }) {
  return (
    <button
      className={`w-20 h-20 text-3xl font-extrabold border-2 border-gray-400 rounded-xl flex items-center justify-center transition-all duration-200 shadow-md
        ${
          highlight
            ? "bg-gradient-to-br from-yellow-200 to-yellow-400 border-yellow-500 scale-105 animate-pulse"
            : "bg-white hover:bg-blue-100 active:bg-blue-200"
        }
        ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}
      `}
      onClick={onClick}
      disabled={disabled}
      aria-label={value ? `Square ${value}` : "Empty square"}
    >
      <span
        className={
          value === "X"
            ? "text-blue-600"
            : value === "O"
            ? "text-pink-500"
            : ""
        }
      >
        {value}
      </span>
    </button>
  );
}
