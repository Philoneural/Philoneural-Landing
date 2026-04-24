import type { CSSProperties } from 'react'

type Variant = 'hero' | 'divider' | 'footer'

const heroStyle: CSSProperties = {
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  zIndex: 0,
}

const dividerStyle: CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '80px',
  pointerEvents: 'none',
  zIndex: 0,
}

const footerStyle: CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '60px',
  pointerEvents: 'none',
  zIndex: 0,
}

export default function InkBrush({ variant }: { variant: Variant }) {
  if (variant === 'hero') {
    return (
      <svg
        style={heroStyle}
        viewBox="0 0 800 400"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
      >
        <path d="M 390 -10 Q 500 22 570 5 Q 660 -14 780 16" stroke="#111110" strokeWidth="16" opacity=".065" strokeLinecap="round"/>
        <path d="M 410 16 Q 520 50 600 30 Q 695 8 790 40"  stroke="#111110" strokeWidth="10" opacity=".048" strokeLinecap="round"/>
        <path d="M 430 36 Q 540 66 628 46 Q 720 26 800 58" stroke="#111110" strokeWidth="5.5" opacity=".035" strokeLinecap="round"/>
        <circle cx="542" cy="48" r="5"   fill="#111110" opacity=".08"/>
        <circle cx="568" cy="62" r="3"   fill="#111110" opacity=".07"/>
        <circle cx="526" cy="68" r="3.5" fill="#111110" opacity=".06"/>
        <circle cx="600" cy="42" r="2.5" fill="#111110" opacity=".07"/>
        <circle cx="624" cy="70" r="2"   fill="#111110" opacity=".06"/>
      </svg>
    )
  }

  if (variant === 'divider') {
    return (
      <svg
        style={dividerStyle}
        viewBox="0 0 800 60"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <path d="M -10 10 Q 100 2 200 8 Q 300 14 420 4 Q 540 -4 660 8 Q 740 16 810 6" stroke="#111110" strokeWidth="4.5" opacity=".08" strokeLinecap="round"/>
        <circle cx="422" cy="22" r="2.5" fill="#111110" opacity=".09"/>
        <circle cx="440" cy="30" r="1.5" fill="#111110" opacity=".08"/>
        <circle cx="408" cy="32" r="2"   fill="#111110" opacity=".07"/>
      </svg>
    )
  }

  return (
    <svg
      style={footerStyle}
      viewBox="0 0 800 60"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path d="M -10 6 Q 140 -4 280 4 Q 420 12 560 2 Q 680 -6 810 5" stroke="#111110" strokeWidth="5" opacity=".08" strokeLinecap="round"/>
      <circle cx="282" cy="18" r="2.2" fill="#111110" opacity=".1"/>
      <circle cx="298" cy="26" r="1.3" fill="#111110" opacity=".09"/>
    </svg>
  )
}
