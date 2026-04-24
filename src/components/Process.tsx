'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
  {
    num: '01',
    title: 'Understand first',
    body: 'Before a single line of code, we listen. We map the real problem, constraints, objectives. The brief is an intellectual contract, not a feature list.',
  },
  {
    num: '02',
    title: 'Design the architecture',
    body: 'We propose the system structure: flows, data models, technical decisions. Every component exists for a reason; if it has no reason, it doesn\'t exist.',
  },
  {
    num: '03',
    title: 'Build with intention',
    body: 'Short sprints, tangible deliveries, direct communication. We use the right tools for the right problem — not the fashionable ones.',
  },
  {
    num: '04',
    title: 'Iterate with data',
    body: 'The live product generates information. We use it to refine, simplify, improve. A finished system is one that hasn\'t found a way to be better yet.',
  },
]

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Circle draw animation
      gsap.from('.process-visual svg path, .process-visual svg circle', {
        scrollTrigger: { trigger: '.process', start: 'top 70%' },
        opacity: 0, scale: .8, duration: 1, stagger: .04,
        transformOrigin: 'center center', ease: 'power3.out',
      })
    }, sectionRef)

    // Steps stagger with IntersectionObserver
    const steps = [...document.querySelectorAll<HTMLElement>('[data-step]')]
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        const i = steps.indexOf(e.target as HTMLElement)
        setTimeout(() => (e.target as HTMLElement).classList.add('on'), i * 130)
        obs.unobserve(e.target)
      })
    }, { threshold: .15 })
    steps.forEach(s => obs.observe(s))

    return () => { ctx.revert(); obs.disconnect() }
  }, [])

  return (
    <section className="process" id="process" ref={sectionRef}>
      <div className="c">
        <p className="lbl r">Proceso</p>
        <div className="process-grid">

          {/* Left: Visual */}
          <div className="process-visual r">
            <svg viewBox="0 0 460 460" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="230" cy="230" r="195" stroke="rgba(72,202,228,.04)" strokeWidth="1"/>
              <circle cx="230" cy="230" r="140" stroke="rgba(72,202,228,.06)" strokeWidth="1"/>
              <circle cx="230" cy="230" r="80"  stroke="rgba(72,202,228,.08)" strokeWidth="1"/>
              <path d="M230 90 C310 90 380 155 380 230" stroke="var(--cel)" strokeWidth="1.2" fill="none" opacity=".25" strokeLinecap="round"/>
              <path d="M380 230 C380 308 314 370 230 370" stroke="var(--per)" strokeWidth="1.2" fill="none" opacity=".22" strokeLinecap="round"/>
              <path d="M230 370 C148 370 80 306 80 230" stroke="var(--cel)" strokeWidth="1"   fill="none" opacity=".2"  strokeLinecap="round" strokeDasharray="3 5"/>
              <path d="M80 230 C80 150 148 90 230 90"  stroke="var(--per)" strokeWidth="1"   fill="none" opacity=".18" strokeLinecap="round" strokeDasharray="3 5"/>
              <circle cx="230" cy="90"  r="8" fill="var(--cel)" opacity=".7"/>
              <circle cx="380" cy="230" r="8" fill="var(--per)" opacity=".65"/>
              <circle cx="230" cy="370" r="8" fill="var(--cel)" opacity=".7"/>
              <circle cx="80"  cy="230" r="8" fill="var(--per)" opacity=".55"/>
              <circle cx="230" cy="90"  r="20" stroke="var(--cel)" strokeWidth=".7" fill="none" opacity=".2"/>
              <circle cx="380" cy="230" r="20" stroke="var(--per)" strokeWidth=".7" fill="none" opacity=".18"/>
              <circle cx="230" cy="370" r="20" stroke="var(--cel)" strokeWidth=".7" fill="none" opacity=".2"/>
              <circle cx="80"  cy="230" r="20" stroke="var(--per)" strokeWidth=".7" fill="none" opacity=".15"/>
              <circle cx="230" cy="230" r="10" fill="none" stroke="var(--per)" strokeWidth="1" opacity=".5"/>
              <circle cx="230" cy="230" r="4"  fill="var(--per)" opacity=".8"/>
              <line x1="230" y1="110" x2="230" y2="220" stroke="var(--cel)" strokeWidth=".5" opacity=".15"/>
              <line x1="360" y1="230" x2="240" y2="230" stroke="var(--per)" strokeWidth=".5" opacity=".15"/>
              <line x1="230" y1="350" x2="230" y2="240" stroke="var(--cel)" strokeWidth=".5" opacity=".15"/>
              <line x1="100" y1="230" x2="220" y2="230" stroke="var(--per)" strokeWidth=".5" opacity=".12"/>
              <text x="230" y="65"  textAnchor="middle" fill="var(--cel)" fontFamily="'JetBrains Mono',monospace" fontSize="8.5" letterSpacing="2" opacity=".5">UNDERSTAND</text>
              <text x="412" y="234" textAnchor="start"  fill="var(--per)" fontFamily="'JetBrains Mono',monospace" fontSize="8.5" letterSpacing="2" opacity=".5">DESIGN</text>
              <text x="230" y="402" textAnchor="middle" fill="var(--cel)" fontFamily="'JetBrains Mono',monospace" fontSize="8.5" letterSpacing="2" opacity=".5">BUILD</text>
              <text x="48"  y="234" textAnchor="end"    fill="var(--per)" fontFamily="'JetBrains Mono',monospace" fontSize="8.5" letterSpacing="2" opacity=".5">ITERATE</text>
            </svg>
          </div>

          {/* Right: Content */}
          <div className="process-content">
            <h2 className="r">From problem<br />to <em>reasoned</em><br />solution</h2>
            <div className="steps">
              {STEPS.map(s => (
                <div className="step" key={s.num} data-step>
                  <span className="step-n">{s.num}</span>
                  <div>
                    <h4>{s.title}</h4>
                    <p>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
