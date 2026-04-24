import Providers from '@/components/Providers'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import Philosophy from '@/components/Philosophy'
import About from '@/components/About'
import Process from '@/components/Process'
import CodeStrip from '@/components/CodeStrip'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { BgCanvas, Loader } from '@/components/ClientSections'

export default function Home() {
  return (
    <Providers>
      {/* Loader */}
      <Loader />

      {/* Fixed layers */}
      <div id="progress" />
      <div className="noise-overlay" />
      <BgCanvas />
      <div className="cursor-dot" />
      <div className="cursor-ring" />

      {/* Navigation */}
      <Nav />

      {/* Main content */}
      <main>
        <Hero />
        <Ticker />
        <Philosophy />
        <About />
        <Process />
        <CodeStrip />
        <Services />
        <Contact />
      </main>

      <Footer />
    </Providers>
  )
}
