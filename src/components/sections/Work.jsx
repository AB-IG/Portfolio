import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionLabel from '../SectionLabel'
import { projects } from '../../data/content'

function WorkRow({ project, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="flex items-center gap-5 cursor-none"
      style={{
        padding: '22px 0',
        borderBottom: '1px solid var(--border)',
        background: hovered ? 'var(--bg-subtle)' : 'transparent',
        transition: 'background 0.2s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Index */}
      <span
        style={{
          fontSize: '0.78rem',
          fontWeight: 500,
          width: 28,
          flexShrink: 0,
          fontVariantNumeric: 'tabular-nums',
          transition: 'color 0.2s ease',
          color: hovered ? 'var(--text-secondary)' : 'var(--text-muted)',
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Title + desc */}
      <motion.div
        className="flex-1 min-w-0"
        animate={{ x: hovered ? 5 : 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <div
          style={{
            fontWeight: 600,
            fontSize: '0.975rem',
            lineHeight: 1.4,
            transition: 'color 0.2s ease',
            color: hovered ? 'var(--text-primary)' : 'var(--text-secondary)',
          }}
        >
          {project.title}
        </div>
        <div
          className="hidden sm:block mt-1"
          style={{ fontSize: '0.82rem', lineHeight: 1.55, color: 'var(--text-muted)' }}
        >
          {project.description}
        </div>
      </motion.div>

      {/* Category */}
      <span
        className="hidden md:block"
        style={{
          fontSize: '0.68rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: 'var(--text-muted)',
          flexShrink: 0,
        }}
      >
        {project.category}
      </span>

      {/* Arrow */}
      <motion.span
        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -8 }}
        transition={{ duration: 0.2 }}
        style={{ fontSize: '1rem', color: 'var(--text-primary)', flexShrink: 0 }}
      >
        →
      </motion.span>
    </div>
  )
}

export default function Work() {
  return (
    <section id="work" className="section-pad section-sep alt-bg">
      <div className="container">
        <SectionLabel>01 / RECENTLY</SectionLabel>

        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
        >
          Selected work, 2023–present.
        </motion.h2>

        <motion.div
          style={{ borderTop: '1px solid var(--border)' }}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.18, ease: 'easeOut' }}
        >
          {projects.map((p, i) => (
            <WorkRow key={p.title} project={p} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
