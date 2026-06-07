import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'
import { useCursorPosition } from '../hooks/useCursorPosition'

const SPRING = { stiffness: 500, damping: 40 }

export default function Cursor() {
  const { x, y } = useCursorPosition()
  const [hovering, setHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  const cx = useSpring(x, SPRING)
  const cy = useSpring(y, SPRING)

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 767px)').matches)

    const handleOver = (e) => {
      const el = e.target.closest('a, button, [data-cursor], .cursor-target')
      setHovering(!!el)
    }

    document.addEventListener('mouseover', handleOver)
    return () => document.removeEventListener('mouseover', handleOver)
  }, [])

  if (isMobile) return null

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        x: cx,
        y: cy,
        translateX: '-50%',
        translateY: '-50%',
        pointerEvents: 'none',
        zIndex: 9999,
        borderRadius: '50%',
      }}
      animate={{
        width:           hovering ? 28 : 10,
        height:          hovering ? 28 : 10,
        backgroundColor: hovering ? 'transparent' : '#F0EDE6',
        border:          hovering ? '1.5px solid #F0EDE6' : '0px solid transparent',
      }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
    />
  )
}
