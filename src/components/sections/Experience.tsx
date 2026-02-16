import { experiences } from '../../data/profile'

export function Experience() {
  return (
    <section id="experience" className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 md:p-10">
      <h2 className="section-title">Professional Experience</h2>
      <p className="section-subtitle">
        Highlights designed for quick recruiter scan: role scope, stack fit, and measurable impact.
      </p>
      <div className="mt-6 grid gap-4">
        {experiences.map((experience) => (
          <article key={experience.id} className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
            <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-xl font-semibold">{experience.company}</h3>
                <p className="text-slate-300">{experience.role}</p>
              </div>
              <div className="text-sm text-slate-400 md:text-right">
                <p>{experience.period}</p>
                <p>{experience.location}</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-300">{experience.summary}</p>
            <ul className="mt-4 grid gap-2 text-sm text-slate-200">
              {experience.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-2">
                  <span className="text-cyan-300">•</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {experience.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-300/35 px-3 py-1 text-xs text-cyan-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
