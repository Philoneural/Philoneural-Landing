'use client'

import { useEffect, useRef } from 'react'

const links = [
  { label: 'Nosotros',  href: '#about'      },
  { label: 'Filosofía', href: '#philosophy'  },
  { label: 'Servicios', href: '#services'    },
]

export default function Nav() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav ref={navRef} id="nav">
      <a href="#" className="nav-logo">
        <img
          src="/logotipo.png"
          alt="Philoneural"
          style={{ mixBlendMode: 'multiply', height: '102px', width: 'auto', display: 'block' }}
        />
      </a>

      <ul>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>

      <a href="#contact" className="nav-connect">Connect</a>

      <button className="nav-burger" aria-label="Menú">
        <span /><span /><span />
      </button>
    </nav>
  )
}
