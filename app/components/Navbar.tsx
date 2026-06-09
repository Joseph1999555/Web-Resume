import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-950/90 text-white py-4 px-6 flex justify-between items-center shadow backdrop-blur">
      <Link href="/" className="text-xl font-bold hover:text-teal-300">
        RESUME
      </Link>
      <div className="flex items-center gap-4 text-sm">
        <Link href="/" className="text-white/80 hover:text-teal-300">
          Home
        </Link>
        <Link href="/profile" className="text-white/80 hover:text-teal-300">
          Profile
        </Link>
        <Link href="/#projects" className="text-white/80 hover:text-teal-300">
          Projects
        </Link>
        <Link href="/#experience" className="text-white/80 hover:text-teal-300">
          Experience
        </Link>
      </div>
    </nav>
  )
}
