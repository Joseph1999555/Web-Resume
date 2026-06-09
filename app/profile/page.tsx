import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const profile = {
  name: "Nattipan Jarunat (Win)",
  headline: "Full-stack Developer",
  email: "nattipanjarunat@gmail.com",
  phone: "098-329-2109",
  location: "Thailand",
  about:
    "I'm fresh graduate from Kasetsart University Kampangsean campus (KUKPS) with a Bachelor's degree in Information Technology.",
  links: [
    {
      label: "GitHub",
      href: "https://github.com/Joseph1999555",
    },
    {
      label: "Resume",
      href: "/",
      internal: true,
    },
  ],
  highlights: [
    { label: "Frontend", value: "React / Next.js / Angular" },
    { label: "Backend", value: "Node.js / Spring Boot" },
    { label: "Database", value: "MySQL / MongoDB" },
  ],
};

export default function ProfilePage() {
  return (
    <main className="min-h-screen text-white bg-gradient-to-br from-slate-950 via-indigo-950 to-fuchsia-950">
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-teal-400/25 via-fuchsia-500/20 to-amber-300/20 blur-3xl" />
          <div className="absolute -bottom-48 -left-40 h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-sky-400/20 via-indigo-500/20 to-fuchsia-400/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-[280px_1fr] md:items-center">
            <div className="flex flex-col items-center md:items-start">
              <div className="rounded-full bg-gradient-to-tr from-teal-400 via-fuchsia-500 to-amber-300 p-1">
                <Image
                  src="/profile2.jpg"
                  alt={profile.name}
                  width={220}
                  height={220}
                  unoptimized
                  className="h-[220px] w-[220px] rounded-full object-cover"
                />
              </div>
              <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-white/90 ring-1 ring-white/15 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.15)]" />
                Open to opportunities
              </p>
            </div>

            <div>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                {profile.name}
              </h1>
              <p className="mt-3 text-lg text-white/85">{profile.headline}</p>
              <p className="mt-2 text-sm text-white/70">{profile.location}</p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur">
                  <p className="text-xs uppercase tracking-wide text-white/60">
                    Contact
                  </p>
                  <div className="mt-3 space-y-2 text-sm">
                    <a
                      className="block text-white/90 hover:text-white"
                      href={`mailto:${profile.email}`}
                    >
                      {profile.email}
                    </a>
                    <a
                      className="block text-white/90 hover:text-white"
                      href={`tel:${profile.phone.replaceAll("-", "")}`}
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur">
                  <p className="text-xs uppercase tracking-wide text-white/60">
                    Links
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {profile.links.map((l) =>
                      l.internal ? (
                        <Link
                          key={l.label}
                          href={l.href}
                          className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/90 ring-1 ring-white/15 hover:bg-white/15"
                        >
                          {l.label}
                        </Link>
                      ) : (
                        <a
                          key={l.label}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/90 ring-1 ring-white/15 hover:bg-white/15"
                        >
                          {l.label}
                        </a>
                      ),
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {profile.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-5 ring-1 ring-white/10 backdrop-blur"
                  >
                    <p className="text-xs uppercase tracking-wide text-white/60">
                      {h.label}
                    </p>
                    <p className="mt-2 text-sm text-white/90">{h.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-3xl bg-white/10 p-7 ring-1 ring-white/15 backdrop-blur">
            <h2 className="text-2xl font-bold">About</h2>
            <p className="mt-3 max-w-3xl text-white/85">{profile.about}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/#projects"
                className="rounded-xl bg-white/10 px-4 py-2 text-sm ring-1 ring-white/15 hover:bg-white/15"
              >
                View projects
              </Link>
              <Link
                href="/#experience"
                className="rounded-xl bg-white/10 px-4 py-2 text-sm ring-1 ring-white/15 hover:bg-white/15"
              >
                View experience
              </Link>
              <Link
                href="/"
                className="rounded-xl bg-gradient-to-r from-teal-400/90 via-sky-400/90 to-fuchsia-400/90 px-4 py-2 text-sm font-semibold text-slate-950 hover:opacity-95"
              >
                Go to resume
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

