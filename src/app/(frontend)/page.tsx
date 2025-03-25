'use client'

import Intro from './components/Intro'
import Footer from './components/footer/Footer'
import AboutIntro from './components/AboutIntro'
import Lenis from 'lenis'
import { useEffect } from 'react'

const aboutParagraphText =
  'Welcome to Welcome to Two Sisters Beauty Bar, where professional skincare meets personal connection. We founded our spa to create a space where you can relax, rejuvenate, and learn how to keep your skin glowing long after you leave us.'

export default function HomePage() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <Intro />
      <AboutIntro value={aboutParagraphText} />
      <Footer />
    </main>
  )
}
