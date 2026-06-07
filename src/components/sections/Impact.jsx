import { motion } from 'framer-motion'
import SectionLabel from '../SectionLabel'
import { stats } from '../../data/content'
import { useCountUp } from '../../hooks/useCountUp'

function StatCell({ stat }) {
  const { ref, display } = useCountUp(stat.display ? 0 : stat.value, 1.6)

  return (
    <div
      ref={ref}
      style={{
        padding: '36px 32px 36px 0',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        className="tabular-nums leading-none font-bold"
        style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          letterSpacing: '-0.04em',
          marginBottom: 10,
          color: 'var(--text-primary)',
        }}
      >
        {stat.display ? stat.display : `${display}${stat.suffix}`}
      </div>
      <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
        {stat.label}
      </div>
    </div>
  )
}

export default function Impact() {
  return (
    <section id="impact" className="section-pad section-sep">
      <div className="container">
        <SectionLabel>04 / NUMBERS</SectionLabel>

        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
        >
          Results that show up in reports.
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3"
          style={{ maxWidth: 820, gap: '0 32px' }}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.18, ease: 'easeOut' }}
        >
          {stats.map((s) => (
            <StatCell key={s.label} stat={s} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
