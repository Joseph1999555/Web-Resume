const education = [
  {
    school: 'Kasetsart University Kampangsean kampus (KUKPS)',
    degree: 'Faculty of liberal arts and science, Bachelor of Information Technology',
    year: '2021 - 2025'
  }
]

export default function Education() {
  return (
    <section className="px-6 py-12 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <ul className="space-y-4">
        {education.map((e, i) => (
          <li key={i}>
            <h3 className="text-xl font-semibold">{e.degree}</h3>
            <p className="text-gray-300">{e.school}</p>
            <p className="text-sm text-gray-400">{e.year}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
