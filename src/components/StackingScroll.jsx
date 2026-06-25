import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function StackingScroll({ children }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const sections = containerRef.current.querySelectorAll('.stack-section')
    const total = sections.length

    sections.forEach((section, i) => {
      const isLast = i === total - 1

      // Pin each section — only last one keeps pinSpacing to push content below it down
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        pin: true,
        pinSpacing: isLast,
      })

      // Slide each section up from below over the previous one
      if (i > 0) {
        gsap.fromTo(
          section,
          { y: '100vh' },
          {
            y: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'top top',
              scrub: true,
            },
          }
        )
      }
    })

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return <div ref={containerRef}>{children}</div>
}
