import { profile } from '../../data/profile'

type HeroProps = {
  isDark: boolean
}

export function Hero({ isDark }: HeroProps) {
  return (
    <section
      id="home"
      className={`rounded-3xl border p-6 md:p-10 ${
        isDark ? 'border-white/10 bg-slate-900/70' : 'border-slate-200 bg-white'
      }`}
    >
      <h1 className="text-3xl font-bold tracking-tight md:text-5xl">{profile.name}</h1>
      <p className={`mt-3 text-base md:text-lg ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{profile.location}</p>
      <div className={`mt-6 flex flex-wrap gap-4 text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
        <a href={`mailto:${profile.email}`} className={isDark ? 'text-cyan-200 hover:text-cyan-100' : 'text-cyan-700 hover:text-cyan-900'}>
          {profile.email}
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className={isDark ? 'text-cyan-200 hover:text-cyan-100' : 'text-cyan-700 hover:text-cyan-900'}
        >
          LinkedIn
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className={isDark ? 'text-cyan-200 hover:text-cyan-100' : 'text-cyan-700 hover:text-cyan-900'}>
          GitHub
        </a>
      </div>
    </section>
  )
}
