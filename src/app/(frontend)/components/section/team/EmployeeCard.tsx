'use client'

import styles from './EmployeeCard.module.scss'
import Image, { StaticImageData } from 'next/image'

type EmployeeCardProps = {
  image: StaticImageData
  name: string
  title: string
  description: string
}

export default function EmployeeCard({ image, name, title, description }: EmployeeCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <div className={styles.bgShape}></div>
        <Image src={image} alt={`${name} headshot`} className={styles.headshot} />
      </div>
      <div className={styles.employeeText}>
        <h3>{name}</h3>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}
