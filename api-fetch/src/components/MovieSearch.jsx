import { useState } from "react";

const API_KEY = "4ee98c97"; 

export default function MovieSearch() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
    );
    const data = await res.json();
    setMovies(data.Search || []);
  };

  return (
    <div className="p-8 max-w-3xl mx-auto bg-gradient-to-br from-indigo-200 via-white to-indigo-300 rounded-3xl shadow-2xl mt-16 border border-indigo-300 animate-fade-in">
      <h1 className="text-5xl font-black mb-10 text-center text-indigo-900 flex items-center justify-center gap-4 drop-shadow-lg tracking-tight">
        <span role="img" aria-label="movie">🎬</span> Movie Search
      </h1>

      <form onSubmit={searchMovies} className="flex flex-col sm:flex-row mb-12 gap-4 items-center justify-center">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
          className="flex-1 p-5 border-2 border-indigo-400 rounded-2xl focus:outline-none focus:border-indigo-700 transition text-xl shadow bg-white/80 placeholder-gray-400"
        />
        <button
          type="submit"
          className="px-8 py-5 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white font-extrabold rounded-2xl shadow-xl hover:scale-105 hover:from-indigo-700 hover:to-indigo-900 transition-all duration-200 text-xl tracking-wide flex items-center gap-2"
        >
          <span role="img" aria-label="search">🔍</span> Search
        </button>
      </form>

      <div className="space-y-10 min-h-[220px]">
        {movies.length === 0 && (
          <div className="text-center text-gray-400 text-2xl font-semibold animate-pulse">No movies found. Try searching for something!</div>
        )}
        {movies.map((movie) => (
          <div key={movie.imdbID} className="flex flex-col sm:flex-row items-center gap-10 border p-6 rounded-3xl shadow-lg hover:shadow-2xl transition bg-white/90 hover:bg-indigo-50/80 animate-fade-in">
            {movie.Poster && movie.Poster !== "N/A" ? (
              <img src={movie.Poster} alt={movie.Title} className="w-36 h-52 object-cover rounded-xl border-2 border-indigo-200 shadow-md" />
            ) : (
              <div className="w-36 h-52 flex items-center justify-center bg-gray-200 rounded-xl text-gray-400 text-lg font-semibold border-2 border-gray-300">No Image</div>
            )}
            <div className="flex-1 w-full">
              <h2 className="text-2xl font-extrabold text-indigo-900 mb-2 tracking-tight">{movie.Title}</h2>
              <div className="flex flex-wrap gap-3 items-center mb-3">
                <span className="bg-indigo-200 text-indigo-800 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow">{movie.Type}</span>
                <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm font-bold shadow">{movie.Year}</span>
              </div>
              <a
                href={`https://www.imdb.com/title/${movie.imdbID}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-indigo-700 hover:underline text-lg font-semibold hover:text-indigo-900 transition"
              >
                View on IMDb ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
