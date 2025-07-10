import { useStorage } from "./hooks/useStorage";

export default function App() {
  const [name, setName, removeName] = useStorage("username", "", false); // false = localStorage

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">🗃️ useStorage Hook Demo</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="border p-2 rounded"
      />
      <div className="mt-4">
        <p className="text-lg">Saved Name: {name}</p>
        <button
          onClick={removeName}
          className="mt-2 px-4 py-1 bg-red-500 text-white rounded"
        >
          Clear Storage
        </button>
      </div>
    </div>
  );
}