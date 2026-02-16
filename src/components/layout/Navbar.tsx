import { navItems, profile } from '../../data/profile'

type NavbarProps = {
  isDark: boolean
  onToggleTheme: () => void
}

export function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b backdrop-blur ${
        isDark ? 'border-white/10 bg-slate-950/90' : 'border-slate-200 bg-white/90'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#home" className={`text-sm font-semibold tracking-wide ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>
          {profile.name}
        </a>
        <nav aria-label="Primary" className="hidden gap-5 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm transition ${isDark ? 'text-slate-300 hover:text-cyan-300' : 'text-slate-700 hover:text-cyan-700'}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          onClick={onToggleTheme}
          className={`rounded-full border px-3 py-1 text-xs transition ${
            isDark
              ? 'border-cyan-300/50 text-cyan-200 hover:border-cyan-200 hover:text-white'
              : 'border-cyan-700/40 text-cyan-700 hover:border-cyan-700 hover:text-cyan-900'
          }`}
        >
          {isDark ? 'Light mode' : 'Dark mode'}
        </button>
      </div>
    </header>
  )
}
