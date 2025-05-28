const describe = {
  des: "I'm fresh graduate from Kasetsart University Kampangsean kampus (KUKPS) with a Bachelor's degree in Information Technology.",
}

export default function About() {
  return (
    <section className="px-6 py-12 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold mb-4">About me</h2>
      <p className="text-lg text-gray-300 max-w-3xl">
        {describe.des}
        </p>
    </section>
  )
}
