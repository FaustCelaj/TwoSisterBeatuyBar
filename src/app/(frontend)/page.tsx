'use client'

import TemplateSpace from './components/TemplateSpace'
import Footer from './components/layout/footer/Footer'
import AboutIntro from './components/section/aboutIntro/AboutIntro'
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
      <TemplateSpace />
      <AboutIntro value={aboutParagraphText} />
      <Footer />
    </main>
  )
}
