import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionLabel from '../SectionLabel'
import { tools } from '../../data/content'

function Tag({ label }) {
  const [hov, setHov] = useState(false)

  return (
    <span
      className="inline-block cursor-none"
      style={{
        fontSize: '0.82rem',
        fontWeight: 400,
        padding: '4px 12px',
        borderRadius: 999,
        border: '1px solid var(--border)',
        transition: 'color 0.15s, background 0.15s',
        color: 'var(--text-secondary)',
        background: hov ? 'var(--bg-subtle)' : 'transparent',
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {label}
    </span>
  )
}

export default function Stack() {
  return (
    <section id="stack" className="section-pad section-sep">
      <div className="container">
        <SectionLabel>06 / STACK</SectionLabel>

        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
        >
          Tools.
        </motion.h2>

        <motion.p
          className="prose-block"
          style={{ marginBottom: 40 }}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.18, ease: 'easeOut' }}
        >
          React.js, TypeScript, JavaScript ES6+, Node.js, Express.js, MongoDB, Mongoose, Tailwind
          CSS, Bootstrap, HTML5, CSS3, Jest, Git, GitHub, Lighthouse, JWT, OAuth 2.0.
          Tool-agnostic, and well-practiced at staying that way.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-2"
          style={{ maxWidth: 660 }}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.28, ease: 'easeOut' }}
        >
          {tools.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
