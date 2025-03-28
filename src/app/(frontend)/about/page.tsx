import TeamSection from '../components/section/team/TeamSection'
import TemplateSpace from '../components/TemplateSpace'
import ServiceSection from '../components/section/servicesGrid/ServiceSection'
import Divider from '../components/layout/divider/Divider'

export default function About() {
  return (
    <main>
      <TemplateSpace />
      <TeamSection />
      <Divider width={50} thickness={2} colour="#d3c3b0" />
      <ServiceSection />
    </main>
  )
}
