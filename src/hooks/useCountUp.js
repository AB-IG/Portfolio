import { useEffect, useRef, useState } from 'react'
import { useMotionValue, animate, useInView } from 'framer-motion'

export function useCountUp(target, duration = 1.5) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(0)
  const mv = useMotionValue(0)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    const unsub = mv.on('change', (v) => setDisplay(Math.round(v)))
    return unsub
  }, [mv])

  useEffect(() => {
    if (inView) {
      animate(mv, target, { duration, ease: 'easeOut' })
    }
  }, [inView, target, duration, mv])

  return { ref, display }
}
