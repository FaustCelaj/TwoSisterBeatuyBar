'use client'

import Footer from './components/footer/Footer'
import Intro from './components/Intro'
import Lenis from 'lenis'
import { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  return (
    <main>
      <Intro />
      <Footer />
    </main>
  )
}
