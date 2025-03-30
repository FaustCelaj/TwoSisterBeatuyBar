import styles from './AboutSection.module.scss'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useRef, useState } from 'react'
import AboutIntro from './AboutIntro'

const paragraph: string =
  'Welcome to Two Sisters Beauty Bar, where professional skincare meets personal connection. We founded our spa to create a space where you can relax, rejuvenate, and learn how to keep your skin glowing long after you leave us.'

export default function AboutSection() {
  const sectionRef = useRef(null)
  const circleRef = useRef(null)
  const [clipRadius, setClipRadius] = useState('5%')

  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ['start 0.1', 'center 0.9'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const newRadius = `${5 + latest * 95}%`
    setClipRadius(newRadius)
  })

  return (
    <section ref={sectionRef} className={styles.section}>
      <motion.div
        ref={circleRef}
        className={styles.container}
        style={{
          clipPath: `circle(${clipRadius} at 50% 50%)`,
        }}
      >
        {/* <div className={styles.content}>
          <AboutIntro value={paragraph} />
        </div> */}
      </motion.div>
    </section>
  )
}
