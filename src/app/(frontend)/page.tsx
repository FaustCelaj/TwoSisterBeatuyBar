'use client'

import TemplateSpace from './components/TemplateSpace'
import AboutIntro from './components/section/aboutIntro/AboutIntro'
import FAQSection from './components/section/faq/FAQSection'
import ServiceSection from './components/section/servicesGrid/ServiceSection'

const aboutParagraphText =
  'Welcome to Two Sisters Beauty Bar, where professional skincare meets personal connection. We founded our spa to create a space where you can relax, rejuvenate, and learn how to keep your skin glowing long after you leave us.'

export default function HomePage() {
  return (
    <main>
      <TemplateSpace />
      <AboutIntro value={aboutParagraphText} />
      <ServiceSection />
      <FAQSection isHomePage={true} />
      {/* add button to link about page (Meet you aesthicians)*/}
    </main>
  )
}
