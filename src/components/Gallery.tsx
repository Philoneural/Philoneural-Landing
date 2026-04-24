'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Gallery() {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // GSAP entrance
    gsap.utils.toArray<HTMLElement>('.card').forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: '.gallery', start: 'top 80%' },
        opacity: 0, y: 40, duration: .8, delay: i * .15, ease: 'power3.out',
      })
    })

    // Drag scroll
    const c = carouselRef.current
    if (!c) return
    let isDown = false, startX = 0, scrollLeft = 0

    const onDown = (e: MouseEvent) => {
      isDown = true; c.style.cursor = 'grabbing'
      startX = e.pageX - c.offsetLeft; scrollLeft = c.scrollLeft
    }
    const onLeave = () => { isDown = false; c.style.cursor = 'grab' }
    const onUp    = () => { isDown = false; c.style.cursor = 'grab' }
    const onMove  = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - c.offsetLeft
      c.scrollLeft = scrollLeft - (x - startX) * 1.4
    }

    c.addEventListener('mousedown',  onDown)
    c.addEventListener('mouseleave', onLeave)
    c.addEventListener('mouseup',    onUp)
    c.addEventListener('mousemove',  onMove)

    // Touch
    let touchStartX = 0, touchScrollLeft = 0
    const onTouchStart = (e: TouchEvent) => {
      touchStartX     = e.touches[0].pageX - c.offsetLeft
      touchScrollLeft = c.scrollLeft
    }
    const onTouchMove = (e: TouchEvent) => {
      const x = e.touches[0].pageX - c.offsetLeft
      c.scrollLeft = touchScrollLeft - (x - touchStartX) * 1.2
    }
    c.addEventListener('touchstart', onTouchStart, { passive: true })
    c.addEventListener('touchmove',  onTouchMove,  { passive: true })

    return () => {
      c.removeEventListener('mousedown',  onDown)
      c.removeEventListener('mouseleave', onLeave)
      c.removeEventListener('mouseup',    onUp)
      c.removeEventListener('mousemove',  onMove)
      c.removeEventListener('touchstart', onTouchStart)
      c.removeEventListener('touchmove',  onTouchMove)
    }
  }, [])

  return (
    <section className="gallery" id="gallery">

      <div className="gallery-header r">
        <div>
          <p className="lbl" style={{ marginBottom: '14px' }}>01 / Proyectos</p>
          <h2>The <em>Gallery</em></h2>
          <p style={{ fontSize: '.84rem', color: 'var(--mid)', marginTop: '8px' }}>
            Curated architectural nodes. Designed for infinite scale.
          </p>
        </div>
        <span className="gallery-label">Drag to explore →</span>
      </div>

      <div className="carousel" id="carousel" ref={carouselRef}>

        {/* Card 1 — Aether Engine */}
        <article className="card">
          <div className="card-img">
            <svg viewBox="0 0 560 315" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="560" height="315" fill="#111"/>
              <ellipse cx="280" cy="158" rx="200" ry="130" fill="url(#cg1)" opacity=".5"/>
              <circle cx="160" cy="100" r="5" fill="#48cae4" opacity=".5"/>
              <circle cx="280" cy="80"  r="7" fill="#48cae4" opacity=".6"/>
              <circle cx="400" cy="100" r="5" fill="#a4c9ff" opacity=".5"/>
              <circle cx="200" cy="200" r="6" fill="#48cae4" opacity=".55"/>
              <circle cx="360" cy="210" r="6" fill="#a4c9ff" opacity=".55"/>
              <circle cx="280" cy="240" r="9" fill="#a4c9ff" opacity=".65"/>
              <path d="M163 103 C210 130 255 145 276 82" stroke="#48cae4" strokeWidth=".9" fill="none" opacity=".25"/>
              <path d="M276 87 C300 130 350 185 353 208" stroke="#48cae4" strokeWidth=".9" fill="none" opacity=".22"/>
              <path d="M203 198 C230 218 258 234 273 240" stroke="#a4c9ff" strokeWidth="1"  fill="none" opacity=".25"/>
              <path d="M357 208 C340 222 310 234 287 240" stroke="#a4c9ff" strokeWidth="1"  fill="none" opacity=".25"/>
              <path d="M163 103 C185 145 195 175 202 198" stroke="#48cae4" strokeWidth=".7" fill="none" opacity=".18"/>
              <path d="M403 102 C390 148 378 180 362 210" stroke="#a4c9ff" strokeWidth=".8" fill="none" opacity=".2"/>
              <defs>
                <radialGradient id="cg1" cx="50%" cy="50%" r="50%">
                  <stop offset="0%"   stopColor="#023e8a" stopOpacity=".8"/>
                  <stop offset="100%" stopColor="transparent"/>
                </radialGradient>
              </defs>
            </svg>
            <div className="card-arrow">↗</div>
          </div>
          <div className="card-info">
            <h3>Aether Engine</h3>
            <p className="card-tag">Distributed Neural Processing</p>
            <div className="card-bar" />
          </div>
        </article>

        {/* Card 2 — Oculus Node */}
        <article className="card">
          <div className="card-img">
            <svg viewBox="0 0 560 315" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="560" height="315" fill="#0c1018"/>
              <line x1="0"   y1="105" x2="560" y2="105" stroke="#48cae4" strokeWidth=".3" opacity=".15"/>
              <line x1="0"   y1="210" x2="560" y2="210" stroke="#48cae4" strokeWidth=".3" opacity=".15"/>
              <line x1="140" y1="0"   x2="140" y2="315" stroke="#48cae4" strokeWidth=".3" opacity=".1"/>
              <line x1="280" y1="0"   x2="280" y2="315" stroke="#48cae4" strokeWidth=".3" opacity=".1"/>
              <line x1="420" y1="0"   x2="420" y2="315" stroke="#48cae4" strokeWidth=".3" opacity=".1"/>
              <path d="M40 158 C80 90 120 226 160 158 C200 90 240 226 280 158 C320 90 360 226 400 158 C440 90 480 226 520 158"
                    stroke="#48cae4" strokeWidth="1.8" fill="none" opacity=".55"/>
              <path d="M40 168 C80 100 120 236 160 168 C200 100 240 236 280 168 C320 100 360 236 400 168 C440 100 480 236 520 168"
                    stroke="#a4c9ff" strokeWidth=".6" fill="none" opacity=".2"/>
              <circle cx="160" cy="158" r="5" fill="#48cae4" opacity=".7"/>
              <circle cx="280" cy="158" r="5" fill="#48cae4" opacity=".7"/>
              <circle cx="400" cy="158" r="5" fill="#48cae4" opacity=".7"/>
              <ellipse cx="280" cy="158" rx="180" ry="80" fill="url(#cg2)" opacity=".25"/>
              <defs>
                <radialGradient id="cg2" cx="50%" cy="50%" r="50%">
                  <stop offset="0%"   stopColor="#48cae4" stopOpacity=".3"/>
                  <stop offset="100%" stopColor="transparent"/>
                </radialGradient>
              </defs>
            </svg>
            <div className="card-arrow">↗</div>
          </div>
          <div className="card-info">
            <h3>Oculus Node</h3>
            <p className="card-tag">Vision &amp; Pattern Recognition API</p>
            <div className="card-bar" />
          </div>
        </article>

        {/* Card 3 — Neural Loom */}
        <article className="card">
          <div className="card-img">
            <svg viewBox="0 0 560 315" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="560" height="315" fill="#0a0d0f"/>
              <circle cx="280" cy="158" r="120" stroke="#48cae4" strokeWidth=".5" fill="none" opacity=".15" strokeDasharray="4 6"/>
              <circle cx="280" cy="158" r="80"  stroke="#a4c9ff" strokeWidth=".5" fill="none" opacity=".12" strokeDasharray="2 8"/>
              <circle cx="280" cy="158" r="40"  stroke="#48cae4" strokeWidth=".8" fill="none" opacity=".2"/>
              <circle cx="280" cy="158" r="12"  fill="var(--per)" opacity=".7"/>
              <circle cx="280" cy="158" r="6"   fill="white"      opacity=".5"/>
              <circle cx="280" cy="38"  r="4" fill="#a4c9ff" opacity=".5"/>
              <circle cx="400" cy="158" r="4" fill="#48cae4" opacity=".5"/>
              <circle cx="280" cy="278" r="4" fill="#a4c9ff" opacity=".5"/>
              <circle cx="160" cy="158" r="4" fill="#48cae4" opacity=".5"/>
              <line x1="280" y1="42"  x2="280" y2="118" stroke="#a4c9ff" strokeWidth=".5" opacity=".25"/>
              <line x1="396" y1="158" x2="320" y2="158" stroke="#48cae4" strokeWidth=".5" opacity=".25"/>
              <line x1="280" y1="274" x2="280" y2="198" stroke="#a4c9ff" strokeWidth=".5" opacity=".25"/>
              <line x1="164" y1="158" x2="240" y2="158" stroke="#48cae4" strokeWidth=".5" opacity=".25"/>
              <circle cx="280" cy="158" r="130" fill="url(#cg3)" opacity=".4"/>
              <defs>
                <radialGradient id="cg3" cx="50%" cy="50%" r="50%">
                  <stop offset="0%"   stopColor="#023e8a" stopOpacity=".5"/>
                  <stop offset="100%" stopColor="transparent"/>
                </radialGradient>
              </defs>
            </svg>
            <div className="card-arrow">↗</div>
          </div>
          <div className="card-info" style={{ right: '-20px', bottom: '-40px', left: 'auto', top: 'auto', transform: 'none' }}>
            <h3>Neural Loom</h3>
            <p className="card-tag">Quantum State Management</p>
            <div className="card-bar" />
          </div>
        </article>

        {/* Card 4 — Signal Graph */}
        <article className="card">
          <div className="card-img">
            <svg viewBox="0 0 560 315" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="560" height="315" fill="#060b10"/>
              <rect x="80"  y="200" width="40" height="80"  fill="#48cae4" opacity=".3"  rx="1"/>
              <rect x="160" y="140" width="40" height="140" fill="#48cae4" opacity=".4"  rx="1"/>
              <rect x="240" y="100" width="40" height="180" fill="#48cae4" opacity=".55" rx="1"/>
              <rect x="320" y="60"  width="40" height="220" fill="#a4c9ff" opacity=".6"  rx="1"/>
              <rect x="400" y="120" width="40" height="160" fill="#a4c9ff" opacity=".45" rx="1"/>
              <rect x="480" y="170" width="40" height="110" fill="#48cae4" opacity=".35" rx="1"/>
              <path d="M100 200 L180 140 L260 100 L340 60 L420 120 L500 170"
                    stroke="var(--cel)" strokeWidth="1.5" fill="none" opacity=".7"/>
              <circle cx="340" cy="60" r="5" fill="#a4c9ff" opacity=".9"/>
              <line x1="60" y1="280" x2="540" y2="280" stroke="rgba(255,255,255,.08)" strokeWidth="1"/>
              <ellipse cx="340" cy="200" rx="80" ry="120" fill="url(#cg4)" opacity=".2"/>
              <defs>
                <radialGradient id="cg4" cx="50%" cy="50%" r="50%">
                  <stop offset="0%"   stopColor="#a4c9ff" stopOpacity=".8"/>
                  <stop offset="100%" stopColor="transparent"/>
                </radialGradient>
              </defs>
            </svg>
            <div className="card-arrow">↗</div>
          </div>
          <div className="card-info" style={{ right: 'auto', left: '-20px', bottom: '-40px', top: 'auto', transform: 'none' }}>
            <h3>Signal Graph</h3>
            <p className="card-tag">Real-time Analytics Platform</p>
            <div className="card-bar" />
          </div>
        </article>

      </div>
    </section>
  )
}
