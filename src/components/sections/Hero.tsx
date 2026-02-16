import { profile } from '../../data/profile'

export function Hero() {
  return (
    <section id="home" className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 md:p-10">
      <h1 className="text-3xl font-bold tracking-tight md:text-5xl">{profile.name}</h1>
      <p className="mt-3 text-base text-slate-300 md:text-lg">{profile.location}</p>
      <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-300">
        <a href={`mailto:${profile.email}`} className="text-cyan-200 hover:text-cyan-100">
          {profile.email}
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-cyan-200 hover:text-cyan-100">
          LinkedIn
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="text-cyan-200 hover:text-cyan-100">
          GitHub
        </a>
      </div>
    </section>
  )
}
