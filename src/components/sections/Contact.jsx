import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionLabel from '../SectionLabel'
import { meta } from '../../data/content'

const DIMMED = 'var(--text-secondary)'
const BRIGHT = 'var(--text-primary)'

function ContactRow({ icon, label, href, isStatic }) {
  const [hov, setHov] = useState(false)

  const inner = (
    <div className="flex items-center justify-between w-full" style={{ minHeight: 52 }}>
      <span
        className="flex items-center gap-3 font-medium"
        style={{
          fontSize: '0.95rem',
          color: hov ? BRIGHT : DIMMED,
          transition: 'color 0.2s ease',
        }}
      >
        <span>{icon}</span>
        <span>{label}</span>
      </span>
      {!isStatic && (
        <motion.span
          animate={{ opacity: hov ? 1 : 0, x: hov ? 0 : -8 }}
          transition={{ duration: 0.18 }}
          style={{ fontSize: '0.9rem', color: BRIGHT }}
        >
          →
        </motion.span>
      )}
    </div>
  )

  const lineStyle = { borderBottom: '1px solid var(--border)' }

  if (isStatic) {
    return <div style={lineStyle} className="cursor-none">{inner}</div>
  }

  return (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      style={{ ...lineStyle, textDecoration: 'none', display: 'block' }}
      className="cursor-none"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {inner}
    </a>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="section-pad section-sep">
      <div className="container">
        <SectionLabel>08 / REACH</SectionLabel>

        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
        >
          Contact.
        </motion.h2>

        <motion.p
          className="prose-block"
          style={{ marginBottom: 44 }}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.18, ease: 'easeOut' }}
        >
          Available for senior and lead engineering roles. Remote, hybrid, or on-site across Nigeria.
          Response time is fast.
        </motion.p>

        <motion.div
          style={{ maxWidth: 540, borderTop: '1px solid var(--border)' }}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.28, ease: 'easeOut' }}
        >
          <ContactRow icon="📧" label={meta.email}    href={`mailto:${meta.email}`} />
          <ContactRow icon="📞" label={meta.phone}    href={`tel:+234${meta.phone.replace(/^0/, '')}`} />
          <ContactRow icon="🔗" label={`LinkedIn — ${meta.linkedin}`} href={meta.linkedinHref} />
          <ContactRow icon="📍" label={meta.location} isStatic />

          <div
            className="flex items-center gap-2 py-4 font-semibold"
            style={{ fontSize: '0.875rem', color: '#4ADE80' }}
          >
            <span
              style={{
                width: 7, height: 7,
                borderRadius: '50%',
                background: '#4ADE80',
                display: 'inline-block',
                flexShrink: 0,
              }}
            />
            Open to Opportunities
          </div>
        </motion.div>
      </div>
    </section>
  )
}
