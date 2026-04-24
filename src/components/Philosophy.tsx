'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import InkBrush from './InkBrush'

gsap.registerPlugin(ScrollTrigger)

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.phi-quote', {
        scrollTrigger: { trigger: '.philosophy', start: 'top 75%' },
        opacity: 0, y: 30, duration: 1, ease: 'power3.out',
      })
      gsap.utils.toArray<HTMLElement>('.pillar').forEach((p, i) => {
        gsap.from(p, {
          scrollTrigger: { trigger: '.phi-pillars', start: 'top 80%' },
          opacity: 0, y: 24, duration: .7, delay: i * .15, ease: 'power3.out',
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="philosophy" id="philosophy" ref={sectionRef}>
      <InkBrush variant="divider" />
      <div className="phi-bg-text" aria-hidden="true">Intelligence</div>

      <div className="c">
        <p className="phi-section-n r">02 / Our Belief</p>

        <p className="phi-quote r d1">
          &ldquo;Intelligence is only useful when you can{' '}
          <span className="hl">trust what it tells you</span>
          {' — and trust what it builds.”'}
        </p>

        <p className="phi-attr r d2">— Philoneural</p>

        <div className="phi-pillars r d2">

          {/* Pillar 1: Transparent AI */}
          <div className="pillar">
            <svg className="pillar-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <path d="M8 36 C12 24 18 16 24 12 C30 8 36 10 40 18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
              <circle cx="8"  cy="36" r="2.5" fill="currentColor" opacity=".7"/>
              <circle cx="40" cy="18" r="2.5" fill="currentColor" opacity=".7"/>
              <circle cx="24" cy="12" r="2"   fill="currentColor" opacity=".5"/>
            </svg>
            <h4>Transparent AI</h4>
            <p>We never hide what the system does or why. Every AI integration we build is explainable, auditable, and honest about its limits.</p>
          </div>

          {/* Pillar 2: Built to Last */}
          <div className="pillar">
            <svg className="pillar-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <rect x="6"  y="6"  width="36" height="36" stroke="currentColor" strokeWidth="1.2"/>
              <rect x="14" y="14" width="20" height="20" stroke="currentColor" strokeWidth=".7" opacity=".5"/>
              <circle cx="24" cy="24" r="4" fill="currentColor" opacity=".6"/>
              <path d="M6 6 L14 14 M42 6 L34 14 M6 42 L14 34 M42 42 L34 34" stroke="currentColor" strokeWidth=".6" opacity=".4"/>
            </svg>
            <h4>Built to Last</h4>
            <p>Clean architecture, documented decisions, maintainable code. We build things you can extend and rely on years from now.</p>
          </div>

          {/* Pillar 3: Your Partner */}
          <div className="pillar">
            <svg className="pillar-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.2"/>
              <circle cx="24" cy="10" r="3.5" fill="currentColor" opacity=".6"/>
              <circle cx="38" cy="30" r="3.5" fill="currentColor" opacity=".6"/>
              <circle cx="10" cy="30" r="3.5" fill="currentColor" opacity=".6"/>
              <path d="M24 13.5 L35.5 27.5 M35.5 30.5 L26.5 30.5 M10.5 27.5 L24 13.5" stroke="currentColor" strokeWidth=".8" opacity=".5" fill="none"/>
            </svg>
            <h4>Your Partner</h4>
            <p>Small team means direct access, fast decisions, and someone who genuinely cares about your product — not just the invoice.</p>
          </div>

        </div>
      </div>
    </section>
  )
}
