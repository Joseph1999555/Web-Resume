const jobs = [
  {
    company: 'SCMS Technology',
    role: 'Full-stack Developer',
    period: '25/11/2024 - 21/03/2025',
    detail: 'Developed and maintained web applications using angular, spring-boot, and mySql.'
  }
]

export default function Experience() {
  return (
    <section className="px-6 py-12 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <ul className="space-y-6">
        {jobs.map((job, i) => (
          <li key={i}>
            <h3 className="text-xl font-semibold">{job.role} @ {job.company}</h3>
            <p className="text-sm text-gray-400">{job.period}</p>
            <p className="text-gray-300">{job.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
