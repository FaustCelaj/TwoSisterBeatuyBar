import EmployeeCard from './EmployeeCard'
import styles from './TeamSection.module.scss'
import headshot1 from '../../../public/images/headshot1.png'
import headshot2 from '../../../public/images/headshot2.png'
import headshot3 from '../../../public/images/headshot3.png'

const team = [
  {
    image: headshot1,
    name: 'Shumaila Ahmed',
    title: 'Co-Founder',
    description:
      'Hi! I’m one of the sisters and the proud owner of Two Sisters Beauty Bar. With 7 years as a medical aesthetician, I’m passionate about skin health and client education. I specialize in Hydrafacials, Green Peels & lash lifts. Can’t wait to see you soon!',
  },
  {
    image: headshot2,
    name: 'Nabila Ahmed',
    title: 'Co-Founder',
    description:
      'I’m one of the sisters and a passionate aesthetician at Two Sisters Beauty Bar. I specialize in facials, chemical peels & nails, with 5 years of experience. Creating a warm, welcoming space for my clients is my priority. Can’t wait to meet you!',
  },
  {
    image: headshot3,
    name: 'Bonita Bonita',
    title: 'Aesthetician',
    description:
      'With 9 years of experience, I love making my clients feel refreshed and confident! I specialize in facials, customizing each one for your unique needs. Helping you unwind and glow is my passion. Looking forward to pampering you soon!',
  },
]

export default function TeamSection() {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.teamContainer}>
        {team.map((member, index) => (
          <EmployeeCard key={index} {...member} />
        ))}
      </div>
    </div>
  )
}
