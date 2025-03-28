'use client'

import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import styles from './EmployeeCard.module.scss'

type EmployeeCardProps = {
  image: StaticImageData
  name: string
  title: string
  description: string
}

export default function EmployeeCard({ image, name, title, description }: EmployeeCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`${styles.card} ${isHovered ? styles.hovered : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.hoverBorder}></div>
      <div className={styles.imageWrapper}>
        <div className={styles.imageGradient}></div>
        <Image
          src={image}
          alt={`${name}, ${title}`}
          className={styles.image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <div className={styles.employeeText}>
        <h3>{name}</h3>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}
