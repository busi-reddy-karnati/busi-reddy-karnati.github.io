import { Contact } from './components/sections/Contact'
import { DigitalResume } from './components/sections/DigitalResume'
import { Experience } from './components/sections/Experience'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { Navbar } from './components/layout/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-16 pt-24 md:px-8">
        <Hero />
        <Experience />
        <DigitalResume />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
