const projects = [
  { title: "Tic Tac Toe", desc: "Classic 2-player game in React" },
  { title: "useStorage Hook", desc: "Custom React hook for local/session storage" },
  { title: "Movie Search", desc: "Search movies using TMDB API" },
  { title: "Redux Todo", desc: "Task manager app using Redux" },
];

export default function Projects() {
  return (
    <section className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p, idx) => (
          <div key={idx} className="border rounded p-4 shadow">
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
