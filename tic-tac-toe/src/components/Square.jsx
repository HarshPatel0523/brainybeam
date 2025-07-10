export default function Square({ value, onClick }) {
  return (
    <button
      className="w-20 h-20 text-2xl font-bold border border-black"
      onClick={onClick}
    >
      {value}
    </button>
  );
}
