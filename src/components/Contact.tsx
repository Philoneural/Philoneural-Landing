'use client'

import { useRef, useState } from 'react'
import InkBrush from './InkBrush'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const btnRef  = useRef<HTMLButtonElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const btn = btnRef.current
    if (!btn || loading) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <section className="contact" id="contact">
      <InkBrush variant="divider" />
      <div className="contact-glow" aria-hidden="true" />

      <div className="c">
        <div className="contact-grid">

          {/* Left */}
          <div className="r">
            <p className="lbl">Get in touch</p>
            <h2>Let&apos;s<br /><em>talk.</em></h2>
            <p className="contact-p">
              Have a project in mind? Just want to explore what&apos;s possible?
              We&apos;re a small team — we respond to every message ourselves,
              usually within 24 hours.
            </p>
            <p className="contact-p" style={{ marginTop: '8px' }}>
              Or email us directly at{' '}
              <a
                href="mailto:info@philoneural.com"
                style={{ color: 'var(--paper)', borderBottom: '1px solid rgba(0,0,0,.2)' }}
              >
                info@philoneural.com
              </a>
            </p>
            <div className="socials" aria-label="Social links">
              <a href="#" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" aria-label="GitHub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="mailto:info@philoneural.com" aria-label="Email">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="r d2">
            <div className="form-card">
              {submitted ? (
                <div className="form-success">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                    <circle cx="16" cy="16" r="15" stroke="var(--cel)" strokeWidth="1.2"/>
                    <path d="M10 16.5l4.5 4.5 8-9" stroke="var(--cel)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h3>Message received!</h3>
                  <p>Thanks for reaching out. We&apos;ll get back to you at your email within 24 hours.</p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} noValidate>
                  <div className="field">
                    <label htmlFor="fn">Your name</label>
                    <input type="text" id="fn" placeholder="Alex Smith" autoComplete="name" required />
                    <div className="field-line" />
                    <div className="field-glow" />
                  </div>
                  <div className="field">
                    <label htmlFor="fe">Email address</label>
                    <input type="email" id="fe" placeholder="alex@company.com" autoComplete="email" required />
                    <div className="field-line" />
                    <div className="field-glow" />
                  </div>
                  <div className="field">
                    <label htmlFor="fp">What are you building? <span className="field-optional">(optional)</span></label>
                    <input type="text" id="fp" placeholder="e.g. AI dashboard, mobile app, data pipeline…" />
                    <div className="field-line" />
                    <div className="field-glow" />
                  </div>
                  <div className="field" style={{ marginBottom: '36px' }}>
                    <label htmlFor="fm">Message</label>
                    <textarea id="fm" placeholder="Tell us a bit about your project or idea. No need to have everything figured out." rows={4} required />
                    <div className="field-line" />
                    <div className="field-glow" />
                  </div>
                  <button type="submit" className="form-btn" ref={btnRef} disabled={loading}>
                    <span className="form-btn-text">{loading ? 'Sending…' : 'Send message'}</span>
                    {!loading && <span className="form-btn-icon">→</span>}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
