'use client'

import FAQ from './FAQ'
import styles from './FAQSection.module.scss'

type FAQSectionProps = {
  isHomePage?: boolean
  title?: string
  description?: string
  categoryId?: string
}

export default function FAQSection({
  isHomePage = false,
  title = 'Have a question? We have answers.',
  description,
  categoryId,
}: FAQSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.leftWrapper}>
          <h3>{title}</h3>
          {description && <p>{description}</p>}
        </div>
        <div className={styles.rightWrapper}>
          <FAQ
            isGeneral={isHomePage} // For homepage, show only general FAQs
            limit={isHomePage ? 5 : undefined} // Limit FAQs on homepage
            categoryId={categoryId} // Optional specific category
          />
        </div>
      </div>
    </section>
  )
}
