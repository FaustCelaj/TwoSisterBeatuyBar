import styles from './ServiceSection.module.scss'
import ServiceCard from './ServiceCard'

const services = [
  {
    serviceTitle: 'Facial Care',
    serviceDescription:
      'Hi! I’m one of the sisters and the proud owner of Two Sisters Beauty Bar. With 7 years as a medical aesthetician, I’m passionate about skin health and client education. I specialize in Hydrafacials, Green Peels & lash lifts. Can’t wait to see you soon!',
    link: '/services/facial-care',
    serviceCount: 8,
  },
  {
    serviceTitle: 'Nail Care',
    serviceDescription:
      'Hi! I’m one of the sisters and the proud owner of Two Sisters Beauty Bar. With 7 years as a medical aesthetician, I’m passionate about skin health and client education. I specialize in Hydrafacials, Green Peels & lash lifts. Can’t wait to see you soon!',
    link: '/services/facial-care',
    serviceCount: 9,
  },
  {
    serviceTitle: 'Body Care',
    serviceDescription:
      'Hi! I’m one of the sisters and the proud owner of Two Sisters Beauty Bar. With 7 years as a medical aesthetician, I’m passionate about skin health and client education. I specialize in Hydrafacials, Green Peels & lash lifts. Can’t wait to see you soon!',
    link: '/services/facial-care',
    serviceCount: 5,
  },
  {
    serviceTitle: 'Lashes & Brows',
    serviceDescription:
      'Hi! I’m one of the sisters and the proud owner of Two Sisters Beauty Bar. With 7 years as a medical aesthetician, I’m passionate about skin health and client education. I specialize in Hydrafacials, Green Peels & lash lifts. Can’t wait to see you soon!',
    link: '/services/facial-care',
    serviceCount: 12,
  },
  {
    serviceTitle: 'Waxing',
    serviceDescription:
      'Hi! I’m one of the sisters and the proud owner of Two Sisters Beauty Bar. With 7 years as a medical aesthetician, I’m passionate about skin health and client education. I specialize in Hydrafacials, Green Peels & lash lifts. Can’t wait to see you soon!',
    link: '/services/facial-care',
    serviceCount: 11,
  },
  {
    serviceTitle: 'Laser Hair Removal',
    serviceDescription:
      'Hi! I’m one of the sisters and the proud owner of Two Sisters Beauty Bar. With 7 years as a medical aesthetician, I’m passionate about skin health and client education. I specialize in Hydrafacials, Green Peels & lash lifts. Can’t wait to see you soon!',
    link: '/services/facial-care',
    serviceCount: 0,
  },
]

export default function ServiceSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>Meet Our Team</h2>
          <p>
            Our passionate team of experienced professionals is committed to delivering exceptional
            beauty services tailored to your unique needs.
          </p>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
