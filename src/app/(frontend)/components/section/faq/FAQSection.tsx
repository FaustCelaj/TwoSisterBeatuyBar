import FAQ from './FAQ'
import styles from './FAQSection.module.scss'

export default function FAQSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.leftWrapper}>
          <h3>Have a question? We have answers.</h3>
        </div>
        <div className={styles.rightWrapper}>
          right side
          <FAQ />
        </div>
      </div>
    </section>
  )
}
