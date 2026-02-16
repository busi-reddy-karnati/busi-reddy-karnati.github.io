import { skillGroups } from '../../data/profile'

export function Skills() {
  return (
    <section id="skills" className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 md:p-10">
      <h2 className="section-title">Technical Skills</h2>
      <p className="section-subtitle">
        Skill clusters aligned with software, backend, infrastructure, and systems engineering roles.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article key={group.title} className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
            <h3 className="text-lg font-semibold text-cyan-100">{group.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-full border border-white/15 px-3 py-1 text-sm text-slate-200">
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
