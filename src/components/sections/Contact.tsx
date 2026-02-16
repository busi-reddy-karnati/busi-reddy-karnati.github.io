import { profile } from '../../data/profile'

type ContactProps = {
  isDark: boolean
}

export function Contact({ isDark }: ContactProps) {
  return (
    <section
      id="contact"
      className={`rounded-3xl border p-6 md:p-10 ${
        isDark ? 'border-white/10 bg-slate-900/70' : 'border-slate-200 bg-white'
      }`}
    >
      <h2 className="section-title">Contact</h2>
      <p className="section-subtitle">
        I am actively exploring roles across software, backend, infrastructure, and systems engineering.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <article
          className={`rounded-2xl border p-5 ${
            isDark ? 'border-white/10 bg-slate-950/50' : 'border-slate-200 bg-slate-50'
          }`}
        >
          <h3 className="text-lg font-semibold">Let&apos;s connect</h3>
          <ul className={`mt-3 grid gap-2 text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            <li>
              Email:{' '}
              <a className={isDark ? 'text-cyan-200 hover:text-cyan-100' : 'text-cyan-700 hover:text-cyan-900'} href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </li>
            <li>
              Phone: <span className={isDark ? 'text-slate-100' : 'text-slate-900'}>{profile.phone}</span>
            </li>
            <li>
              Location: <span className={isDark ? 'text-slate-100' : 'text-slate-900'}>{profile.location}</span>
            </li>
            <li>
              LinkedIn:{' '}
              <a
                className={isDark ? 'text-cyan-200 hover:text-cyan-100' : 'text-cyan-700 hover:text-cyan-900'}
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                busi-reddy-karnati
              </a>
            </li>
            <li>
              GitHub:{' '}
              <a
                className={isDark ? 'text-cyan-200 hover:text-cyan-100' : 'text-cyan-700 hover:text-cyan-900'}
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                busi-reddy-karnati
              </a>
            </li>
          </ul>
        </article>

        <article
          className={`rounded-2xl border p-5 ${
            isDark ? 'border-cyan-300/20 bg-cyan-500/5' : 'border-cyan-200 bg-cyan-50'
          }`}
        >
          <h3 className={`text-lg font-semibold ${isDark ? 'text-cyan-100' : 'text-cyan-800'}`}>Recruiter Quick Pitch</h3>
          <p className={`mt-3 text-sm ${isDark ? 'text-cyan-50/90' : 'text-cyan-900/90'}`}>
            Engineer with experience building distributed backend systems, infrastructure automation, and
            reliability-first platforms across high-throughput workloads. Strong ownership mindset with
            measurable impact in uptime, latency, and release quality.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a className="btn-primary text-sm" href={`mailto:${profile.email}`}>
              Email Me
            </a>
            <a className="btn-secondary text-sm" href={profile.linkedin} target="_blank" rel="noreferrer">
              Message on LinkedIn
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
