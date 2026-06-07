import { motion } from 'framer-motion'
import SectionLabel from '../SectionLabel'
import { certifications } from '../../data/content'

export default function Certifications() {
  return (
    <section id="learning" className="section-pad section-sep alt-bg">
      <div className="container">
        <SectionLabel>07 / LEARNING</SectionLabel>

        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
        >
          Education &amp; Certifications.
        </motion.h2>

        <motion.div
          style={{ maxWidth: 660, borderTop: '1px solid var(--border)' }}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.18, ease: 'easeOut' }}
        >
          {certifications.map((c, i) => (
            <div
              key={i}
              className="flex items-start justify-between gap-6"
              style={{ padding: '20px 0', borderBottom: '1px solid var(--border)' }}
            >
              <div className="flex-1 min-w-0">
                <div style={{ fontWeight: 600, fontSize: '0.95rem', lineHeight: 1.4, color: 'var(--text-primary)' }}>
                  {c.title}
                </div>
                <div style={{ fontSize: '0.82rem', marginTop: 4, color: 'var(--text-secondary)' }}>
                  {c.issuer}
                </div>
              </div>
              <div
                className="flex-shrink-0"
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  fontVariantNumeric: 'tabular-nums',
                  marginTop: 2,
                  color: 'var(--text-muted)',
                }}
              >
                {c.year}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
