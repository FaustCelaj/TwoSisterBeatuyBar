'use client'

import TemplateSpace from './components/TemplateSpace'
import AboutIntro from './components/section/aboutIntro/AboutIntro'

const aboutParagraphText =
  'Welcome to Welcome to Two Sisters Beauty Bar, where professional skincare meets personal connection. We founded our spa to create a space where you can relax, rejuvenate, and learn how to keep your skin glowing long after you leave us.'

export default function HomePage() {
  return (
    <main>
      <TemplateSpace />
      <AboutIntro value={aboutParagraphText} />
      {/* add button to link about page (Meet you aesthicians)*/}
    </main>
  )
}
