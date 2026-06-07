import { motion } from 'framer-motion'

export default function SectionLabel({ children }) {
  const chars = children.split('')
  return (
    <motion.span
      className="section-label"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.03 } },
      }}
    >
      {chars.map((ch, i) => (
        <motion.span
          key={i}
          variants={{
            hidden:   { opacity: 0, y: 10 },
            visible:  { opacity: 1, y: 0, transition: { duration: 0.3 } },
          }}
          style={{ display: 'inline-block' }}
        >
          {ch === ' ' ? ' ' : ch}
        </motion.span>
      ))}
    </motion.span>
  )
}
