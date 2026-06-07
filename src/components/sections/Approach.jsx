import { motion } from 'framer-motion'
import SectionLabel from '../SectionLabel'

export default function Approach() {
  return (
    <section id="method" className="section-pad section-sep">
      <div className="container">
        <SectionLabel>05 / METHOD</SectionLabel>

        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
        >
          Approach.
        </motion.h2>

        <motion.p
          className="prose-block"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.18, ease: 'easeOut' }}
        >
          Code is shared early, reviewed often, and never precious. Every architectural decision has a
          reason behind it. Feedback is treated as a guardrail, not a verdict. Jargon stays out of
          stakeholder rooms so the work can land with the people it affects. The process stays elastic
          enough to break its own rules when something better comes along — and consistent enough to
          ship every time.
        </motion.p>
      </div>
    </section>
  )
}
