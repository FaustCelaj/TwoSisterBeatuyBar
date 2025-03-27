'use client'

import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import styles from './ServiceCard.module.scss'

type ServiceCardProps = {
  image: StaticImageData
  serviceTitle: string
  link?: string
  serviceCount: number
}

export default function ServiceCard({
  image,
  serviceTitle,
  link = '#',
  serviceCount,
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`${styles.card} ${isHovered ? styles.hovered : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.hoverBorder}></div>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={`${serviceTitle} service image`}
          className={styles.image}
          priority
        />
      </div>
      <div className={styles.serviceText}>
        <h3>{serviceTitle}</h3>
      </div>
      <Link href={link} className={styles.learnMoreBtn}>
        View Treatments
      </Link>
    </div>
  )
}
