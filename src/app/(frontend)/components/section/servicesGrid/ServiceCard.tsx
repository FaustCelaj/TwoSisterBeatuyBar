'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './ServiceCard.module.scss'

type ServiceCardProps = {
  serviceTitle: string
  serviceDescription: string
  link?: string
  serviceCount: number
}

export default function ServiceCard({
  serviceTitle,
  serviceDescription,
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
      <div className={styles.serviceText}>
        <div className={styles.headingContainer}>
          <h3>{serviceTitle}</h3>
          {serviceCount > 0 && <p>{serviceCount} services</p>}
          {serviceCount === 0 && <p>Coming soon</p>}
        </div>
        <p>{serviceDescription}</p>
        {serviceCount > 0 && (
          <Link href={link} className={styles.viewButton}>
            Explore Services
          </Link>
        )}
        {serviceCount === 0 && <span className={styles.viewButton}>Coming Soon</span>}
      </div>
    </div>
  )
}
