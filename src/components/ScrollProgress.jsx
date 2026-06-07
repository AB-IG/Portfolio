import { motion, useScroll } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <>
      {/* Track (hidden on mobile) */}
      <div
        aria-hidden="true"
        className="hidden md:block"
        style={{
          position: 'fixed',
          right: 0,
          top: 0,
          width: 2,
          height: '100vh',
          background: 'var(--border)',
          zIndex: 199,
        }}
      />
      {/* Fill */}
      <motion.div
        aria-hidden="true"
        className="hidden md:block"
        style={{
          position: 'fixed',
          right: 0,
          top: 0,
          width: 2,
          height: '100vh',
          backgroundColor: 'var(--text-muted)',
          scaleY: scrollYProgress,
          transformOrigin: 'top',
          zIndex: 200,
        }}
      />
    </>
  )
}
