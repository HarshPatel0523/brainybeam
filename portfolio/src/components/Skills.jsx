const skills = ["React", "Node.js", "MongoDB", "Flutter", "Firebase", "Tailwind"];

export default function Skills() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <ul className="flex flex-wrap gap-3">
        {skills.map((skill, idx) => (
          <li key={idx} className="bg-blue-100 px-3 py-1 rounded">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
