import styles from './Footer.module.scss'
import Content from './Content'

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerStickyContainer}>
        <div className={styles.footerStickyContent}>
          <Content />
        </div>
      </div>
    </div>
  )
}
