import { useMemo, useState } from 'react'
import { experiences } from '../../data/profile'

type DigitalResumeProps = {
  isDark: boolean
}

export function DigitalResume({ isDark }: DigitalResumeProps) {
  const [activeExperienceId, setActiveExperienceId] = useState(experiences[0]?.id ?? '')

  const activeExperience = useMemo(
    () => experiences.find((experience) => experience.id === activeExperienceId) ?? experiences[0],
    [activeExperienceId],
  )

  if (!activeExperience) {
    return null
  }

  return (
    <section
      id="digital-resume"
      className={`rounded-3xl border p-6 md:p-10 ${
        isDark ? 'border-white/10 bg-slate-900/70' : 'border-slate-200 bg-white'
      }`}
    >
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="section-title">Digital Resume</h2>
          <p className="section-subtitle">
            Click any role for a deeper view of impact, architecture context, and talking points.
          </p>
        </div>
        <a
          href="/Busi_Reddy_Karnati_Resume.pdf"
          className="btn-secondary text-center text-sm"
          target="_blank"
          rel="noreferrer"
        >
          Download PDF Resume
        </a>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[320px_1fr]">
        <aside
          className={`rounded-2xl border p-3 ${
            isDark ? 'border-white/10 bg-slate-950/50' : 'border-slate-200 bg-slate-50'
          }`}
        >
          <div className="flex flex-col gap-2">
            {experiences.map((experience) => (
              <button
                key={experience.id}
                type="button"
                onClick={() => setActiveExperienceId(experience.id)}
                className={`rounded-xl border px-3 py-3 text-left transition ${
                  activeExperience.id === experience.id
                    ? isDark
                      ? 'border-cyan-300/60 bg-cyan-500/10 text-cyan-100'
                      : 'border-cyan-700/45 bg-cyan-50 text-cyan-900'
                    : isDark
                      ? 'border-white/10 bg-slate-900/70 text-slate-300 hover:border-cyan-300/40 hover:text-white'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-cyan-700/40 hover:text-slate-900'
                }`}
              >
                <p className="text-sm font-semibold">{experience.company}</p>
                <p className="mt-1 text-xs opacity-90">{experience.role}</p>
                <p className="mt-1 text-xs opacity-70">{experience.period}</p>
              </button>
            ))}
          </div>
        </aside>

        <article
          className={`rounded-2xl border p-5 ${
            isDark ? 'border-white/10 bg-slate-950/50' : 'border-slate-200 bg-slate-50'
          }`}
        >
          <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{activeExperience.company}</h3>
              <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>{activeExperience.role}</p>
            </div>
            <div className={`text-sm md:text-right ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              <p>{activeExperience.period}</p>
              <p>{activeExperience.location}</p>
            </div>
          </div>

          <div className="mt-5">
            <h4 className={`text-sm font-semibold tracking-wide ${isDark ? 'text-cyan-200' : 'text-cyan-800'}`}>Highlights</h4>
            <ul className={`mt-2 grid gap-2 text-sm ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
              {activeExperience.highlights.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className={isDark ? 'text-cyan-300' : 'text-cyan-700'}>•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {activeExperience.stack.map((stack) => (
              <span
                key={stack}
                className={`rounded-full px-3 py-1 text-xs ${
                  isDark ? 'bg-white/5 text-slate-300' : 'bg-slate-200 text-slate-700'
                }`}
              >
                {stack}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
