'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import InkBrush from './InkBrush'

gsap.registerPlugin(ScrollTrigger)

const SERVICES = [
  {
    n: '01 · Core',
    title: 'Software a medida',
    desc: 'Web and mobile applications built from scratch for your use case. No templates, no compromises. Clean architecture that scales when your business scales.',
    icon: (
      <svg className="srv-icon" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="30" height="30" rx="1" stroke="currentColor" strokeWidth="1.1"/>
        <path d="M10 18 l5 5 10-10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    delay: 'd1',
  },
  {
    n: '02 · Intelligence',
    title: 'Sistemas de IA',
    desc: 'ML models, data pipelines, LLM integrations. We turn data into decisions — no black boxes, traceable reasoning from input to output.',
    icon: (
      <svg className="srv-icon" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <circle cx="18" cy="18" r="14" stroke="currentColor" strokeWidth="1.1"/>
        <circle cx="18" cy="18" r="6"  fill="currentColor" opacity=".25"/>
        <path d="M18 4 V7 M18 29 V32 M4 18 H7 M29 18 H32" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      </svg>
    ),
    delay: 'd2',
  },
  {
    n: '03 · Architecture',
    title: 'Arquitectura de sistemas',
    desc: 'Cloud infrastructure design, microservices, robust APIs. The invisible structure that makes everything else work without apparent effort.',
    icon: (
      <svg className="srv-icon" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path d="M6 12 L18 6 L30 12 L30 24 L18 30 L6 24 Z" stroke="currentColor" strokeWidth="1.1" fill="none"/>
        <path d="M6 12 L18 18 L30 12"  stroke="currentColor" strokeWidth=".6" opacity=".5"/>
        <path d="M18 18 L18 30" stroke="currentColor" strokeWidth=".6" opacity=".5"/>
      </svg>
    ),
    delay: 'd3',
  },
  {
    n: '04 · Product',
    title: 'Diseño de producto',
    desc: 'UX research, prototypes, design systems. The interface is the first sales argument. We make it as solid as the logic behind it.',
    icon: (
      <svg className="srv-icon" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect x="5" y="8" width="26" height="20" rx="1" stroke="currentColor" strokeWidth="1.1"/>
        <path d="M5 13 H31" stroke="currentColor" strokeWidth=".6" opacity=".4"/>
        <circle cx="9"  cy="10.5" r="1" fill="currentColor" opacity=".5"/>
        <circle cx="13" cy="10.5" r="1" fill="currentColor" opacity=".5"/>
      </svg>
    ),
    delay: 'd1',
  },
  {
    n: '05 · Integration',
    title: 'APIs e integraciones',
    desc: 'Connect platforms, automate flows, synchronize data. We make systems that were never meant to talk to each other understand each other perfectly.',
    icon: (
      <svg className="srv-icon" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect x="4"  y="10" width="12" height="16" rx="1" stroke="currentColor" strokeWidth="1.1"/>
        <rect x="20" y="10" width="12" height="16" rx="1" stroke="currentColor" strokeWidth="1.1"/>
        <path d="M16 18 H20" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    delay: 'd2',
  },
  {
    n: '06 · Growth',
    title: 'Escalabilidad',
    desc: 'Technical audits, code optimization, growth strategies. For when the system that works well today needs to work perfectly tomorrow.',
    icon: (
      <svg className="srv-icon" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path d="M8 28 L8 18 M15 28 L15 12 M22 28 L22 20 M29 28 L29 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M6 8 L30 8" stroke="currentColor" strokeWidth=".5" opacity=".3"/>
      </svg>
    ),
    delay: 'd3',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      document.querySelectorAll<HTMLElement>('.srv').forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { boxShadow: 'inset 0 0 40px rgba(72,202,228,0.04)', duration: .4 })
        })
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { boxShadow: 'none', duration: .4 })
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="services" id="services" ref={sectionRef}>
      <InkBrush variant="divider" />
      <div className="c">
        <p className="lbl r">Servicios</p>
        <h2 className="r d1">What we<br /><em>build</em> together</h2>
        <div className="srv-grid">
          {SERVICES.map((s, i) => (
            <div className={`srv r ${s.delay}`} key={s.n}>
              <p className="srv-n">{s.n}</p>
              {s.icon}
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
