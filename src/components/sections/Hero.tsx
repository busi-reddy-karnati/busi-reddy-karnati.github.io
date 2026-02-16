import { profile, roleFocus, spotlightMetrics } from '../../data/profile'

export function Hero() {
  return (
    <section id="home" className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 md:p-10">
      <p className="text-sm text-cyan-300">{profile.shortHeadline}</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-5xl">{profile.heroTitle}</h1>
      <p className="mt-4 max-w-3xl text-base text-slate-300 md:text-lg">{profile.heroSubTitle}</p>
      <p className="mt-3 text-sm text-slate-400">{profile.availability}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a href="#digital-resume" className="btn-primary">
          View Digital Resume
        </a>
        <a href="#contact" className="btn-secondary">
          Contact Me
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
        >
          GitHub Profile
        </a>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
        {spotlightMetrics.map((metric) => (
          <article key={metric.label} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
            <p className="text-xl font-semibold text-cyan-200">{metric.value}</p>
            <p className="text-sm text-slate-400">{metric.label}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/60 p-5">
        <h2 className="text-lg font-semibold text-slate-100">Recruiter-Relevant Focus Areas</h2>
        <ul className="mt-3 grid gap-2 text-sm text-slate-300 md:grid-cols-2">
          {roleFocus.map((focus) => (
            <li key={focus} className="flex gap-2">
              <span className="text-cyan-300">•</span>
              <span>{focus}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
