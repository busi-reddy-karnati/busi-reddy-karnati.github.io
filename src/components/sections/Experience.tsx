import { experiences } from '../../data/profile'

type ExperienceProps = {
  isDark: boolean
}

export function Experience({ isDark }: ExperienceProps) {
  return (
    <section
      id="experience"
      className={`rounded-3xl border p-6 md:p-10 ${
        isDark ? 'border-white/10 bg-slate-900/70' : 'border-slate-200 bg-white'
      }`}
    >
      <h2 className="section-title">Professional Experience</h2>
      <p className="section-subtitle">
        Highlights covering role scope, stack fit, and measurable impact.
      </p>
      <div className="mt-6 grid gap-4">
        {experiences.map((experience) => (
          <article
            key={experience.id}
            className={`rounded-2xl border p-5 ${
              isDark ? 'border-white/10 bg-slate-950/50' : 'border-slate-200 bg-slate-50'
            }`}
          >
            <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-xl font-semibold">{experience.company}</h3>
                <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>{experience.role}</p>
              </div>
              <div className={`text-sm md:text-right ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                <p>{experience.period}</p>
                <p>{experience.location}</p>
              </div>
            </div>
            <p className={`mt-3 text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{experience.summary}</p>
            <ul className={`mt-4 grid gap-2 text-sm ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
              {experience.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-2">
                  <span className={isDark ? 'text-cyan-300' : 'text-cyan-700'}>•</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {experience.stack.map((item) => (
                <span
                  key={item}
                  className={`rounded-full border px-3 py-1 text-xs ${
                    isDark ? 'border-cyan-300/35 text-cyan-200' : 'border-cyan-700/30 text-cyan-800'
                  }`}
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
