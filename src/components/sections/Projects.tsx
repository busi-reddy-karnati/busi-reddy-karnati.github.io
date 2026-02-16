import { projects } from '../../data/profile'

export function Projects() {
  return (
    <section id="projects" className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 md:p-10">
      <h2 className="section-title">Selected Projects & Case Studies</h2>
      <p className="section-subtitle">
        These case studies are positioned for backend, systems, and infrastructure recruiter conversations.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
            <p className="inline-flex rounded-full bg-cyan-400/10 px-2 py-1 text-xs text-cyan-200">
              {project.roleTag}
            </p>
            <h3 className="mt-3 text-lg font-semibold">{project.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{project.summary}</p>
            <p className="mt-3 text-sm text-slate-300">
              <span className="font-semibold text-slate-100">Architecture:</span> {project.architecture}
            </p>
            <p className="mt-2 text-sm text-slate-300">
              <span className="font-semibold text-slate-100">Impact:</span> {project.impact}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                  {item}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex text-sm text-cyan-200 transition hover:text-cyan-100"
            >
              View on GitHub {'->'}
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
