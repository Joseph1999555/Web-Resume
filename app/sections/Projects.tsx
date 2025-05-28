const projects = [
  {
    project_type: 'Web Development',
    name: 'Web Resume',
    desc: 'เว็บ Resume เท่ๆ อย่างที่มึงกำลังดูอยู่',
    link: 'https://your-domain.com'
  },
  {
    project_type: 'Special Problem Project',
    name: 'Loma Type',
    desc: 'Developed a touch typing game to help users learn touch typing in programming languages.',
    link: 'https://github.com/yourname/ecommerce-api'
  }
]

export default function Projects() {
  return (
    <section className="px-6 py-12 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold mb-6">Project</h2>
      <div className="space-y-6">
        {projects.map((p, i) => (
          <div key={i} className="border-l-4 border-teal-500 pl-4">
            <h3 className="text-xl font-semibold">{p.project_type}</h3>
            <h1 className="text-xl font-semibold">{p.name}</h1>
            <p className="text-gray-300">{p.desc}</p>
            <a href={p.link} className="text-teal-400 hover:underline" target="_blank">
              ดูโปรเจกต์ →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
