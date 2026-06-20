import { projects } from '../../data/profile'

type ProjectsProps = {
  isDark: boolean
}

export function Projects({ isDark }: ProjectsProps) {
  return (
    <section
      id="projects"
      className={`rounded-3xl border p-6 md:p-10 ${
        isDark ? 'border-white/10 bg-slate-900/70' : 'border-slate-200 bg-white'
      }`}
    >
      <h2 className="section-title">Selected Projects & Case Studies</h2>
      <p className="section-subtitle">
        These case studies are positioned for backend, systems, and infrastructure conversations.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`rounded-2xl border p-5 ${
              isDark ? 'border-white/10 bg-slate-950/50' : 'border-slate-200 bg-slate-50'
            }`}
          >
            <p
              className={`inline-flex rounded-full px-2 py-1 text-xs ${
                isDark ? 'bg-cyan-400/10 text-cyan-200' : 'bg-cyan-100 text-cyan-800'
              }`}
            >
              {project.roleTag}
            </p>
            <h3 className="mt-3 text-lg font-semibold">{project.title}</h3>
            <p className={`mt-2 text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{project.summary}</p>
            <p className={`mt-3 text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              <span className={`font-semibold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>Architecture:</span>{' '}
              {project.architecture}
            </p>
            <p className={`mt-2 text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              <span className={`font-semibold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>Impact:</span>{' '}
              {project.impact}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className={`rounded-full px-2.5 py-1 text-xs ${
                    isDark ? 'bg-white/5 text-slate-300' : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex text-sm transition ${
                  isDark ? 'text-cyan-200 hover:text-cyan-100' : 'text-cyan-700 hover:text-cyan-900'
                }`}
              >
                View on GitHub {'->'}
              </a>
              {project.appStore && (
                <a
                  href={project.appStore}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex text-sm transition ${
                    isDark ? 'text-cyan-200 hover:text-cyan-100' : 'text-cyan-700 hover:text-cyan-900'
                  }`}
                >
                  App Store {'->'}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
