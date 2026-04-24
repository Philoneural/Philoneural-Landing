import type { Metadata } from 'next'
import { Noto_Serif, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-noto-serif',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Philoneural — Trusted Intelligence, Built Right',
  description: 'Custom software and AI systems designed to be trusted. No black boxes — clear architecture, honest AI integration, and systems built to last.',
  icons: {
    icon: '/isotipo.png',
    apple: '/isotipo.png',
  },
  openGraph: {
    title: 'Philoneural — Trusted Intelligence, Built Right',
    description: 'Custom software and AI systems you can actually trust.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${notoSerif.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      style={{
        fontFamily: 'var(--font-space-grotesk, system-ui)',
      }}
    >
      <body className="overflow-x-hidden">{children}</body>
    </html>
  )
}
