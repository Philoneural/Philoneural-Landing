'use client'

import { useEffect, useRef } from 'react'
import { useLenis } from '@/hooks/useLenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Providers({ children }: { children: React.ReactNode }) {
  useLenis()

  // Scroll progress bar
  useEffect(() => {
    const progress = document.getElementById('progress')
    const onScroll = () => {
      if (!progress) return
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight)
      progress.style.width = `${pct * 100}%`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Custom cursor
  useEffect(() => {
    const dot  = document.querySelector('.cursor-dot')  as HTMLElement | null
    const ring = document.querySelector('.cursor-ring') as HTMLElement | null
    if (!dot || !ring) return

    let mx = -100, my = -100
    let rx = -100, ry = -100

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      dot.style.opacity = '1'
      ring.style.opacity = '1'
    }
    window.addEventListener('mousemove', onMove)

    const loop = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      dot.style.left  = `${mx}px`
      dot.style.top   = `${my}px`
      ring.style.left = `${rx}px`
      ring.style.top  = `${ry}px`
      requestAnimationFrame(loop)
    }
    requestAnimationFrame(loop)

    const addHover  = () => ring.classList.add('hovered')
    const rmHover   = () => ring.classList.remove('hovered')
    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', rmHover)
    })

    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  // Scroll reveal for .r elements
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        const el = e.target as HTMLElement
        const delay =
          el.classList.contains('d3') ? 300 :
          el.classList.contains('d2') ? 200 :
          el.classList.contains('d1') ? 100 : 0
        setTimeout(() => el.classList.add('on'), delay)
        obs.unobserve(e.target)
      })
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0 })

    // Observe after DOM settles
    const t = setTimeout(() => {
      document.querySelectorAll<HTMLElement>('.r').forEach(el => obs.observe(el))
    }, 300)

    return () => { clearTimeout(t); obs.disconnect() }
  }, [])

  return <>{children}</>
}
