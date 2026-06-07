import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import { navLinks } from '../data/content'

function NavLink({ label, href }) {
  const scroll = () => {
    const el = document.getElementById(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <button
      onClick={scroll}
      className="relative text-soot hover:text-cream text-[0.875rem] font-medium transition-colors duration-200 cursor-none pb-[1px]"
    >
      {label}
      <motion.span
        className="absolute bottom-0 left-0 h-px w-full"
        style={{ background: 'var(--text-primary)', transformOrigin: 'left' }}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      />
    </button>
  )
}

const overlayVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
  exit:    { opacity: 0, transition: { duration: 0.2 } },
}

const linksVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  exit:    { opacity: 0 },
}

const linkItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -10 },
}

const allLinks = [
  { label: 'Intro',      href: 'intro' },
  { label: 'Work',       href: 'work' },
  { label: 'Background', href: 'background' },
  { label: 'Career',     href: 'career' },
  { label: 'Impact',     href: 'impact' },
  { label: 'Method',     href: 'method' },
  { label: 'Stack',      href: 'stack' },
  { label: 'Learning',   href: 'learning' },
  { label: 'Contact',    href: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsub = scrollY.on('change', (v) => setScrolled(v > 40))
    return unsub
  }, [scrollY])

  const scrollTo = (href) => {
    const el = document.getElementById(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 150,
          height: 56,
          background: 'var(--bg)',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          transition: 'border-color 0.3s ease',
        }}
      >
        <div className="container h-full flex items-center justify-between">
          {/* Monogram */}
          <button
            onClick={() => scrollTo('intro')}
            className="text-cream font-bold text-[1rem] tracking-tight cursor-none"
          >
            AM
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <NavLink key={l.href} label={l.label} href={l.href} />
            ))}
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 cursor-none"
            style={{ minHeight: 44, minWidth: 44, alignItems: 'center', justifyContent: 'center', display: 'flex' }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <motion.span
              style={{ display: 'block', width: 21, height: 1.5, background: 'var(--text-primary)', borderRadius: 1 }}
              animate={open ? { y: 6.5, rotate: 45 } : { y: 0, rotate: 0 }}
              transition={{ duration: 0.22 }}
            />
            <motion.span
              style={{ display: 'block', width: 21, height: 1.5, background: 'var(--text-primary)', borderRadius: 1 }}
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.22 }}
            />
            <motion.span
              style={{ display: 'block', width: 21, height: 1.5, background: 'var(--text-primary)', borderRadius: 1 }}
              animate={open ? { y: -6.5, rotate: -45 } : { y: 0, rotate: 0 }}
              transition={{ duration: 0.22 }}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={overlayVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ position: 'fixed', inset: 0, background: '#0F0F0D', zIndex: 140 }}
            className="flex flex-col items-center justify-center"
          >
            <motion.nav
              variants={linksVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col items-center gap-8"
            >
              {allLinks.map((l) => (
                <motion.button
                  key={l.href}
                  variants={linkItem}
                  onClick={() => scrollTo(l.href)}
                  className="text-cream font-bold cursor-none transition-opacity hover:opacity-60"
                  style={{ fontSize: '2rem' }}
                >
                  {l.label}
                </motion.button>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
