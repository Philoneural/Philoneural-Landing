'use client'

import { useEffect } from 'react'
import InkBrush from './InkBrush'

export default function About() {
  useEffect(() => {
    const statEls = document.querySelectorAll<HTMLElement>('[data-count]')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        const el     = e.target as HTMLElement
        const target = parseInt(el.dataset.count || '0')
        const sup    = el.querySelector('sup')
        let current  = 0
        const step   = target / 60
        const iv     = setInterval(() => {
          current += step
          if (current >= target) { current = target; clearInterval(iv) }
          el.textContent = String(Math.floor(current))
          if (sup) el.appendChild(sup)
        }, 16)
        obs.unobserve(el)
      })
    }, { threshold: .5 })
    statEls.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="about" id="about">
      <InkBrush variant="divider" />
      <div className="c">
        <p className="lbl r">About us</p>
        <div className="about-grid">

          {/* Left */}
          <div className="r">
            <h2>A new studio.<br /><em>Fully</em><br />committed.</h2>
            <div className="stats">
              <div>
                <p className="stat-n"><sup>100</sup><sup>%</sup></p>
                <p className="stat-l">Custom — never templates</p>
              </div>
              <div>
                <p className="stat-n"><sup style={{fontSize:'1.4rem'}}>48h</sup></p>
                <p className="stat-l">Max response time</p>
              </div>
              <div>
                <p className="stat-n"><sup style={{fontSize:'1.4rem'}}>AI</sup><sup>+</sup></p>
                <p className="stat-l">Native from day one</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="r d2">
            <p>
              Philoneural is a small, focused software studio. We&apos;re early-stage
              and proud of it — it means every client gets our full attention,
              and every project shapes who we become.
            </p>
            <blockquote>
              &ldquo;We&apos;re not trying to be the biggest.<br />
              We&apos;re trying to be the one<br />
              you actually trust.&rdquo;
            </blockquote>
            <p>
              We work with founders, product teams, and organisations that
              need custom software and AI systems built thoughtfully —
              without the overhead of a large agency or the risk of an inexperienced one.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
