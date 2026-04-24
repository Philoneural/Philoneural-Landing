'use client'

import dynamic from 'next/dynamic'

const BgCanvas = dynamic(() => import('@/components/BgCanvas'), { ssr: false })
const Loader   = dynamic(() => import('@/components/Loader'),   { ssr: false })

export { BgCanvas, Loader }
