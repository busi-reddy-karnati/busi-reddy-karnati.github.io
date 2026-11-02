import { useState } from 'react'
import { Navbar } from './components/layout/Navbar'
import { ReadingList } from './components/sections/ReadingList'

function ReadingListPage() {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={isDark ? 'dark min-h-screen bg-slate-950 text-slate-100' : 'min-h-screen bg-slate-100 text-slate-900'}>
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark((value) => !value)} />
      <main id="main-content" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-16 pt-24 md:px-8">
        <ReadingList isDark={isDark} />
      </main>
    </div>
  )
}

export default ReadingListPage
