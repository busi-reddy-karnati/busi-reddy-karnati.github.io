import { readingList } from '../../data/profile'

type ReadingListProps = {
  isDark: boolean
}

const DAY_MS = 24 * 60 * 60 * 1000
const now = Date.now()
const totalHours = readingList.reduce((sum, item) => sum + item.hours, 0)

function formatStart(start: string) {
  return new Date(`${start}T00:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function isCurrentWeek(start: string) {
  const begin = new Date(`${start}T00:00:00`).getTime()
  return now >= begin && now < begin + 7 * DAY_MS
}

export function ReadingList({ isDark }: ReadingListProps) {
  const muted = isDark ? 'text-slate-300' : 'text-slate-700'
  const strong = isDark ? 'text-slate-100' : 'text-slate-900'

  return (
    <section
      id="reading-list"
      className={`rounded-3xl border p-6 md:p-10 ${
        isDark ? 'border-white/10 bg-slate-900/70' : 'border-slate-200 bg-white'
      }`}
    >
      <h1 className="section-title">Reading List: Reinforcement Learning in Simulation</h1>
      <p className="section-subtitle">
        One paper a week for 10 weeks, about {totalHours} hours in total. The list goes from how agents learn, to how
        simulators work, to how skills learned in simulation transfer to the real world.
      </p>
      <ol className="mt-6 grid gap-4 md:grid-cols-2">
        {readingList.map((item) => {
          const current = isCurrentWeek(item.start)
          return (
            <li
              key={item.week}
              className={`flex flex-col rounded-2xl border p-5 ${
                current
                  ? isDark
                    ? 'border-cyan-400/60 bg-slate-950/50'
                    : 'border-cyan-500/60 bg-cyan-50'
                  : isDark
                    ? 'border-white/10 bg-slate-950/50'
                    : 'border-slate-200 bg-slate-50'
              }`}
            >
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className={`rounded-full px-2 py-1 ${isDark ? 'bg-cyan-400/10 text-cyan-200' : 'bg-cyan-100 text-cyan-800'}`}>
                  Week {item.week} · {formatStart(item.start)}
                </span>
                <span className={`rounded-full px-2 py-1 ${isDark ? 'bg-white/5 text-slate-300' : 'bg-slate-200 text-slate-700'}`}>
                  ~{item.hours} h to read and understand
                </span>
                {current && (
                  <span className={`rounded-full px-2 py-1 font-semibold ${isDark ? 'bg-cyan-300 text-slate-950' : 'bg-cyan-700 text-white'}`}>
                    This week
                  </span>
                )}
              </div>
              <h3 className="mt-3 text-lg font-semibold">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`transition focus:outline-2 focus:outline-offset-2 focus:outline-cyan-500 ${
                    isDark ? 'hover:text-cyan-200' : 'hover:text-cyan-700'
                  }`}
                >
                  {item.title}
                </a>
              </h3>
              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.authors}</p>
              <p className={`mt-3 text-sm ${muted}`}>
                <span className={`font-semibold ${strong}`}>What you learn:</span> {item.learn}
              </p>
              <p className={`mt-2 text-sm ${muted}`}>
                <span className={`font-semibold ${strong}`}>Why it helps simulation training:</span> {item.helps}
              </p>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
