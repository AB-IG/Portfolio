import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function StackingScroll({ children }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const sections = containerRef.current.querySelectorAll('.stack-section')

    sections.forEach((section, i) => {
      // Pin each section in place while next slides over it
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        pin: true,
        pinSpacing: false,
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
