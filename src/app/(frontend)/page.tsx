'use client'

import TemplateSpace from './components/TemplateSpace'
import AboutSection from './components/section/aboutIntro/AboutSection'
import FAQSection from './components/section/faq/FAQSection'
import Hero from './components/section/hero/Hero'
import ServiceSection from './components/section/servicesGrid/ServiceSection'

export default function HomePage() {
  return (
    <main>
      <Hero />
      {/* <TemplateSpace /> */}
      <AboutSection />
      <ServiceSection />
      <FAQSection isHomePage={true} />
      {/* add button to link about page (Meet you aesthicians)*/}
    </main>
  )
}
