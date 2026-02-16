import { skillGroups } from '../../data/profile'

type SkillsProps = {
  isDark: boolean
}

export function Skills({ isDark }: SkillsProps) {
  return (
    <section
      id="skills"
      className={`rounded-3xl border p-6 md:p-10 ${
        isDark ? 'border-white/10 bg-slate-900/70' : 'border-slate-200 bg-white'
      }`}
    >
      <h2 className="section-title">Technical Skills</h2>
      <p className="section-subtitle">
        Skill clusters aligned with software, backend, infrastructure, and systems engineering roles.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className={`rounded-2xl border p-5 ${
              isDark ? 'border-white/10 bg-slate-950/50' : 'border-slate-200 bg-slate-50'
            }`}
          >
            <h3 className={`text-lg font-semibold ${isDark ? 'text-cyan-100' : 'text-cyan-800'}`}>{group.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className={`rounded-full border px-3 py-1 text-sm ${
                    isDark ? 'border-white/15 text-slate-200' : 'border-slate-300 text-slate-700'
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
