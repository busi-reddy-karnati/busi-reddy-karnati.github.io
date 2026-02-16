import { useState } from 'react'
import { Contact } from './components/sections/Contact'
import { DigitalResume } from './components/sections/DigitalResume'
import { Experience } from './components/sections/Experience'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { Navbar } from './components/layout/Navbar'

function App() {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={isDark ? 'min-h-screen bg-slate-950 text-slate-100' : 'min-h-screen bg-slate-100 text-slate-900'}>
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark((value) => !value)} />
      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-16 pt-24 md:px-8">
        <Hero isDark={isDark} />
        <Experience isDark={isDark} />
        <DigitalResume isDark={isDark} />
        <Projects isDark={isDark} />
        <Skills isDark={isDark} />
        <Contact isDark={isDark} />
      </main>
    </div>
  )
}

export default App
