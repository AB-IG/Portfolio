import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
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

export default function App() {
  return (
    <div style={{ background: 'var(--bg)' }}>
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <main role="main">
        <Hero />
        <Work />
        <Featured />
        <Background />
        <Trajectory />
        <Impact />
        <Approach />
        <Stack />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
