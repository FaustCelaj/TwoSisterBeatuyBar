import styles from './Hero.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import BGImage from '../../../public/images/bg_test.jpg'

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* img / video is the background of the container */}
        <Image src={BGImage} alt="Background image" className={styles.BGImage} />
        <div className={styles.textContainer}>
          <h1>This is the hero section</h1>
          <h2>
            Welcome to Two Sisters Beauty Bar, where relaxation and rejuvenation come together in a
            peaceful and serene environment.
          </h2>
          <Link href={'#'} className={styles.viewButton}>
            Explore Services
          </Link>
        </div>
        <div className={styles.scrollBox}>
          <h4>Scroll down for experience</h4>
        </div>
      </div>
    </section>
  )
}
