import { useMemo, useState } from 'react'
import { experiences } from '../../data/profile'

export function DigitalResume() {
  const [activeExperienceId, setActiveExperienceId] = useState(experiences[0]?.id ?? '')

  const activeExperience = useMemo(
    () => experiences.find((experience) => experience.id === activeExperienceId) ?? experiences[0],
    [activeExperienceId],
  )

  if (!activeExperience) {
    return null
  }

  return (
    <section id="digital-resume" className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 md:p-10">
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
        <aside className="rounded-2xl border border-white/10 bg-slate-950/50 p-3">
          <div className="flex flex-col gap-2">
            {experiences.map((experience) => (
              <button
                key={experience.id}
                type="button"
                onClick={() => setActiveExperienceId(experience.id)}
                className={`rounded-xl border px-3 py-3 text-left transition ${
                  activeExperience.id === experience.id
                    ? 'border-cyan-300/60 bg-cyan-500/10 text-cyan-100'
                    : 'border-white/10 bg-slate-900/70 text-slate-300 hover:border-cyan-300/40 hover:text-white'
                }`}
              >
                <p className="text-sm font-semibold">{experience.company}</p>
                <p className="mt-1 text-xs opacity-90">{experience.role}</p>
                <p className="mt-1 text-xs opacity-70">{experience.period}</p>
              </button>
            ))}
          </div>
        </aside>

        <article className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
          <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white">{activeExperience.company}</h3>
              <p className="text-slate-300">{activeExperience.role}</p>
            </div>
            <div className="text-sm text-slate-400 md:text-right">
              <p>{activeExperience.period}</p>
              <p>{activeExperience.location}</p>
            </div>
          </div>

          <div className="mt-5">
            <h4 className="text-sm font-semibold tracking-wide text-cyan-200">Final Highlights</h4>
            <ul className="mt-2 grid gap-2 text-sm text-slate-200">
              {activeExperience.finalBullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="text-cyan-300">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-500/5 p-4">
            <h4 className="text-sm font-semibold tracking-wide text-amber-200">
              Draft - Customize These Before Interviews
            </h4>
            <ul className="mt-2 grid gap-2 text-sm text-amber-100/90">
              {activeExperience.draftBullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="text-amber-300">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {activeExperience.stack.map((stack) => (
              <span key={stack} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">
                {stack}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
