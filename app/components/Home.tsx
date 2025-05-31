import Image from 'next/image'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Experience from '../sections/Experience'
import Education from '../sections/Education'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Home() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <Image
          src="/profile2.jpg" // ใส่รูปโปรไฟล์ไว้ที่ public/profile.jpg
          alt="Profile"
          width={150}
          height={150}
          unoptimized
          className="rounded-full mb-4 border-4 border-white"
        />
        <h1 className="text-4xl font-bold mb-2">Nattipan Jarunat (Win)</h1>
        <p className="text-xl text-gray-300 max-w-xl">
        Email: nattipanjarunat@gmail.com 
        </p>
        <p className="text-xl text-gray-300 max-w-xl">
        Phone: 098-329-2109 
        </p>
      </section>

      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />

      <Footer />
    </main>
  )
}
