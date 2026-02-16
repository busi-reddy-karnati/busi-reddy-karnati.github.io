import { navItems, profile } from '../../data/profile'

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#home" className="text-sm font-semibold tracking-wide text-cyan-300">
          {profile.name}
        </a>
        <nav aria-label="Primary" className="hidden gap-5 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-slate-300 transition hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-cyan-300/50 px-3 py-1 text-xs text-cyan-200 transition hover:border-cyan-200 hover:text-white"
        >
          LinkedIn
        </a>
      </div>
    </header>
  )
}
