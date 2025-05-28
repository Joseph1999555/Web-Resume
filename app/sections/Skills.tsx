const skills = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS']

export default function Skills() {
  return (
    <section className="px-6 py-12 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="bg-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-600 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
