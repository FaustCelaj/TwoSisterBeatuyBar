import styles from './ServiceSection.module.scss'
import FacialImage from '../../../public/images/Facial_care.jpg'
import LashesImage from '../../../public/images/Lashes_and_brows.jpg'
import NailImage from '../../../public/images/Nail_Care.jpg'
import BodyImage from '../../../public/images/Body Care.jpg'
import WaxingImage from '../../../public/images/waxing.jpg'
import LaserImage from '../../../public/images/Laser_removal.jpg'
// Import additional service images as needed
import ServiceCard from './ServiceCard'

// Example services data - you can expand this with your actual services
const services = [
  {
    image: FacialImage,
    serviceTitle: 'Facial Care',
    link: '/services/facial-care',
    serviceCount: 8,
  },
  {
    image: NailImage,
    serviceTitle: 'Nail Care',
    link: '/services/facial-care',
    serviceCount: 9,
  },
  {
    image: BodyImage,
    serviceTitle: 'Body Care',
    link: '/services/facial-care',
    serviceCount: 5,
  },
  {
    image: LashesImage,
    serviceTitle: 'Lashes & Brows',
    link: '/services/facial-care',
    serviceCount: 12,
  },
  {
    image: WaxingImage,
    serviceTitle: 'Waxing',
    link: '/services/facial-care',
    serviceCount: 11,
  },
  {
    image: LaserImage,
    serviceTitle: 'Coming soon',
    link: '/services/facial-care',
    serviceCount: 0,
  },
]

export default function ServiceSection() {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  )
}
