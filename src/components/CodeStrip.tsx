'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CodeStrip() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.code-lines', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
        x: -30, opacity: 0, duration: 1, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div className="code-strip" ref={ref} aria-hidden="true">
      <div className="code-lines">
        <div className="code-line">
          <span className="ln">01</span>
          <span>
            <span className="kw">const</span>{' '}
            <span className="fn">buildSystem</span>{' '}
            <span className="tx">= (</span>
            <span className="fn">problem</span>
            <span className="tx">) =&gt; {'{'}</span>
          </span>
        </div>
        <div className="code-line">
          <span className="ln">02</span>
          <span>
            &nbsp;&nbsp;<span className="kw">const</span>{' '}
            <span className="fn">understanding</span>{' '}
            <span className="tx">= </span>
            <span className="fn">think</span>
            <span className="tx">(</span>
            <span className="fn">problem</span>
            <span className="tx">);&nbsp;&nbsp;</span>
            <span className="cm">// before the stroke, silence</span>
          </span>
        </div>
        <div className="code-line">
          <span className="ln">03</span>
          <span>
            &nbsp;&nbsp;<span className="kw">const</span>{' '}
            <span className="fn">architecture</span>{' '}
            <span className="tx">= </span>
            <span className="fn">design</span>
            <span className="tx">(</span>
            <span className="fn">understanding</span>
            <span className="tx">);&nbsp;&nbsp;</span>
            <span className="cm">// every node with purpose</span>
          </span>
        </div>
        <div className="code-line">
          <span className="ln">04</span>
          <span>
            &nbsp;&nbsp;<span className="kw">return</span>{' '}
            <span className="fn">build</span>
            <span className="tx">(</span>
            <span className="fn">architecture</span>
            <span className="tx">).</span>
            <span className="fn">ship</span>
            <span className="tx">();&nbsp;&nbsp;</span>
            <span className="cm">// no lines wasted</span>
          </span>
        </div>
        <div className="code-line">
          <span className="ln">05</span>
          <span className="tx">{'};'}</span>
        </div>
      </div>
    </div>
  )
}
