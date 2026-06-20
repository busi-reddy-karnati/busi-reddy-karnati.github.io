import { useEffect, useState } from 'react'
import { projects, type ProjectItem } from '../../data/profile'

type ProjectsProps = {
  isDark: boolean
}

export function Projects({ isDark }: ProjectsProps) {
  const [active, setActive] = useState<ProjectItem | null>(null)

  useEffect(() => {
    if (!active) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

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
      <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <button
            key={project.title}
            type="button"
            onClick={() => setActive(project)}
            className={`flex h-full flex-col rounded-2xl border p-5 text-left transition hover:-translate-y-0.5 ${
              isDark
                ? 'border-white/10 bg-slate-950/50 hover:border-cyan-400/40'
                : 'border-slate-200 bg-slate-50 hover:border-cyan-500/40'
            }`}
          >
            <span
              className={`inline-flex w-fit rounded-full px-2 py-1 text-xs ${
                isDark ? 'bg-cyan-400/10 text-cyan-200' : 'bg-cyan-100 text-cyan-800'
              }`}
            >
              {project.roleTag}
            </span>
            <h3 className="mt-3 text-lg font-semibold">{project.title}</h3>
            <p className={`mt-2 line-clamp-3 text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              {project.summary}
            </p>
            <span
              className={`mt-4 inline-flex items-center text-sm font-medium ${
                isDark ? 'text-cyan-200' : 'text-cyan-700'
              }`}
            >
              View details {'->'}
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
        >
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" />
          <div
            onClick={(event) => event.stopPropagation()}
            className={`relative z-10 max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border p-6 shadow-2xl ${
              isDark ? 'border-white/10 bg-slate-900 text-slate-100' : 'border-slate-200 bg-white text-slate-900'
            }`}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close"
              className={`absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full text-lg transition ${
                isDark ? 'text-slate-400 hover:bg-white/10 hover:text-white' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {'×'}
            </button>
            <span
              className={`inline-flex w-fit rounded-full px-2 py-1 text-xs ${
                isDark ? 'bg-cyan-400/10 text-cyan-200' : 'bg-cyan-100 text-cyan-800'
              }`}
            >
              {active.roleTag}
            </span>
            <h3 className="mt-3 pr-8 text-xl font-semibold">{active.title}</h3>
            <p className={`mt-3 text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{active.summary}</p>
            <p className={`mt-4 text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              <span className={`font-semibold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>Architecture:</span>{' '}
              {active.architecture}
            </p>
            <p className={`mt-2 text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              <span className={`font-semibold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>Impact:</span>{' '}
              {active.impact}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {active.stack.map((item) => (
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
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1">
              <a
                href={active.github}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex text-sm transition ${
                  isDark ? 'text-cyan-200 hover:text-cyan-100' : 'text-cyan-700 hover:text-cyan-900'
                }`}
              >
                View on GitHub {'->'}
              </a>
              {active.appStore && (
                <a
                  href={active.appStore}
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
          </div>
        </div>
      )}
    </section>
  )
}
