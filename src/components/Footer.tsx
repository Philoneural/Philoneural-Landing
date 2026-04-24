'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import InkBrush from './InkBrush'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-links a', {
        scrollTrigger: { trigger: ref.current, start: 'top 90%' },
        opacity: 0, x: 10, duration: .5, stagger: .08, ease: 'power2.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <footer ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      <InkBrush variant="footer" />
      <div className="c">
        <div className="footer-inner">
          <img
            src="/logotipo.png"
            alt="Philoneural"
            className="footer-logo"
            style={{ mixBlendMode: 'multiply', height: '26px', width: 'auto' }}
          />
          <p className="footer-copy">© 2025 Philoneural — Trusted Intelligence, Built Right.</p>
          <div className="footer-links">
            {['Manifesto', 'Privacy', 'Terms', 'GitHub'].map(l => (
              <a key={l} href="#">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
