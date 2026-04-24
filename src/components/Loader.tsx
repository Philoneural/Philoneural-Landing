'use client'

import { useEffect, useState } from 'react'

export default function Loader() {
  const [fading, setFading] = useState(false)
  const [done,   setDone]   = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setFading(true), 1500)
    const t2 = setTimeout(() => setDone(true),   2050)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (done) return null

  return (
    <div className={`loader${fading ? ' loader--out' : ''}`} aria-hidden="true">
      <img src="/logotipo.png" alt="" className="loader-logo" />
      <div className="loader-bar">
        <div className="loader-fill" />
      </div>
    </div>
  )
}
