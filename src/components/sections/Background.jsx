import { motion } from 'framer-motion'
import SectionLabel from '../SectionLabel'

export default function Background() {
  return (
    <section id="background" className="section-pad section-sep">
      <div className="container">
        <SectionLabel>02 / BACKGROUND</SectionLabel>

        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
        >
          Beginnings.
        </motion.h2>

        <motion.div
          className="prose-block space-y-7"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.18, ease: 'easeOut' }}
        >
          <p>
            It started with a curiosity about how systems connect — logic to interface, data to
            experience. Computer Science at <strong>Taraba State University</strong> gave it structure.
            What followed was built from real problems that had to work under real pressure.
          </p>
          <p>
            The progression moved fast. <strong>Junior contributor to Senior Engineer within 18
            months</strong> at V-Tech — not by tenure, but by delivering results that showed up in
            client reports.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
