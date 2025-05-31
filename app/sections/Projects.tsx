const projects = [
  {
    project_type: 'Web Development',
    name: 'Web Resume',
    desc: 'Created a personal web resume to showcase my skills and projects.',
    stack: 'Next.js, Tailwind CSS, TypeScript',
    link: 'https://github.com/Joseph1999555/Web-Resume'
  },
  {
    project_type: 'Special Problem Project',
    name: 'Loma Type',
    desc: 'Developed a touch typing game to help users learn touch typing in programming languages.',
    stack: 'React.js, Node, MongoDB,',
    link: 'https://github.com/Joseph1999555/LomatypeClient'
  },
  {
    project_type: 'Virtual Machine',
    name: 'VMware group project',
    desc: 'Used VMware to create a virtual machine for running Linux and connecting sever between virtual machines.',
    stack: 'VMware, Some command line of Linux',
    link: ''
  },
  {
    project_type: 'Machine Learning',
    name: 'Bear Classification group project',
    desc: 'Trained a machine learning model to classify images of bears into different species.',
    stack: 'Python, Keras',
    link: ''
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
            <p className="text-gray-300">stack: {p.stack}</p>
            {p.link && (
              <a
                href={p.link}
                className="text-teal-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                ดูโปรเจกต์ →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
