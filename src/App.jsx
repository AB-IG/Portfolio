import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import StackingScroll from './components/StackingScroll'
import Hero from './components/sections/Hero'
import Work from './components/sections/Work'
import Featured from './components/sections/Featured'
import Background from './components/sections/Background'
import Trajectory from './components/sections/Trajectory'
import Impact from './components/sections/Impact'
import Approach from './components/sections/Approach'
import Stack from './components/sections/Stack'
import Certifications from './components/sections/Certifications'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

const stackBgs = [
  '#0F0F0D', '#111110', '#141412', '#171715',
  '#1A1A17', '#1C1C19', '#1F1F1C', '#222220',
  '#252522', '#282825',
]

const sections = [
  Hero, Work, Featured, Background,
  Trajectory, Impact, Approach, Stack,
  Certifications, Contact,
]

export default function App() {
  return (
    <div style={{ background: 'var(--bg)' }}>
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <main role="main">
        <StackingScroll>
          {sections.map((Section, i) => (
            <div
              key={i}
              className="stack-section"
              style={{
                background: stackBgs[i] || 'var(--bg)',
                position: 'relative',
                zIndex: i + 1,
              }}
            >
              <Section />
            </div>
          ))}
        </StackingScroll>
      </main>
      <Footer />
    </div>
  )
}
