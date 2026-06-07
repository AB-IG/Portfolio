import { motion } from 'framer-motion'
import SectionLabel from '../SectionLabel'
import { career } from '../../data/content'

export default function Trajectory() {
  return (
    <section id="career" className="section-pad section-sep">
      <div className="container">
        <SectionLabel>03 / CAREER</SectionLabel>

        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
        >
          Trajectory.
        </motion.h2>

        <motion.p
          className="prose-block"
          style={{ marginBottom: 48 }}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.18, ease: 'easeOut' }}
        >
          The work has run across two companies and three years —{' '}
          <strong>ZipTech in Abuja</strong>, <strong>V-Tech in Enugu</strong>. Each role reset the
          brief. E-commerce platforms that drove 25% revenue growth. Enterprise auth systems with
          zero security incidents across 2.5 years. Promoted to Senior Engineer within 18 months.
          The discipline was the same each time: carry the complexity so the client never has to.
        </motion.p>

        <motion.div
          style={{ maxWidth: 660 }}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.28, ease: 'easeOut' }}
        >
          {career.map((c, i) => (
            <div
              key={i}
              style={{
                borderLeft: '2px solid var(--text-muted)',
                paddingLeft: 20,
                marginTop: i === 0 ? 0 : 40,
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: 5,
                }}
              >
                {c.period}
              </div>
              <div style={{ fontWeight: 700, fontSize: '0.975rem', marginBottom: 3, color: 'var(--text-primary)' }}>
                {c.role}
              </div>
              <div style={{ fontWeight: 500, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                {c.company} · {c.location}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
