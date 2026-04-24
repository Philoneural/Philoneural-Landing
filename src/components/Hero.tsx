'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import InkBrush from './InkBrush'
import NeuralAnim from './NeuralAnim'

export default function Hero() {
  useEffect(() => {
    const tl = gsap.timeline()
    tl.to('#heroChip',    { opacity: 1, y: 0, duration: .6, ease: 'power3.out' }, .3)
      .to('#heroH1',      { opacity: 1, y: 0, duration: .9, ease: 'power3.out' }, .5)
      .to('#heroSub',     { opacity: 1, y: 0, duration: .7, ease: 'power3.out' }, .75)
      .to('#heroDesc',    { opacity: 1, y: 0, duration: .7, ease: 'power3.out' }, .95)
      .to('#heroActions', { opacity: 1, y: 0, duration: .7, ease: 'power3.out' }, 1.1)
      .to('#heroScroll',  { opacity: 1, duration: .6, ease: 'power2.out' }, 1.6)

    // Hero art parallax on mouse move
    const art = document.getElementById('heroArt')
    if (art && matchMedia('(pointer:fine)').matches) {
      const onMove = (e: MouseEvent) => {
        const dx = (e.clientX / window.innerWidth  - .5) * 18
        const dy = (e.clientY / window.innerHeight - .5) * 10
        gsap.to(art, { x: dx, y: dy, duration: 1.2, ease: 'power2.out' })
      }
      document.addEventListener('mousemove', onMove)
      return () => document.removeEventListener('mousemove', onMove)
    }
  }, [])

  // Scroll parallax on logo
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion:reduce)').matches) return
    const img = document.getElementById('herologo')
    const onScroll = () => {
      if (img) img.style.transform = `translateY(${window.scrollY * .08}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="hero" id="hero">

      {/* Full-hero ink layer */}
      <InkBrush variant="hero" />

      {/* ── Left: Neural art ── */}
      <div className="hero-art" id="heroArt" aria-hidden="true">
        <NeuralAnim />
        <img
          id="herologo"
          src="/logo.png"
          alt=""
          style={{ mixBlendMode: 'multiply', width: '82%', maxWidth: '520px', display: 'block', position: 'relative', zIndex: 1 }}
        />
      </div>

      {/* ── Right: Text ── */}
      <div className="hero-text">
        <div className="hero-chip" id="heroChip">AI-Native Software Studio</div>

        <h1 id="heroH1">
          Trusted Intelligence,<br />
          <em>Built</em> <span className="hl">Right.</span>
        </h1>

        <p className="hero-sub" id="heroSub">
          Custom software and AI systems — with precision
        </p>

        <p className="hero-desc" id="heroDesc">
          We design and build software that your business can actually trust.
          No black boxes, no bloated stacks — just clear architecture,
          honest AI integration, and systems made to last.
        </p>

        <div className="hero-actions" id="heroActions">
          <a href="#contact" className="btn-cel">
            Start a project
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#about" className="btn-ghost">
            Learn more
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* ── Scroll hint ── */}
      <div className="hero-scroll-hint" id="heroScroll" aria-hidden="true">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
