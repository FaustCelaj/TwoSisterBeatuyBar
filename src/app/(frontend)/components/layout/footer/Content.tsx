import styles from './Content.module.scss'

export default function Content() {
  return (
    <div className={styles.contentContainer}>
      <Section1 />
      <Section2 />
    </div>
  )
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  )
}

const Section2 = () => {
  return (
    <div className={styles.footerContainer}>
      <h1>TwoSistersBeautyBar</h1>
      <p>©copyright</p>
    </div>
  )
}

const Nav = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navSection}>
        <h3>Sitemap</h3>
        <p>Home</p>
        <p>About</p>
        <p>Services</p>
        <p>Gallery</p>
        <p>FAQ</p>
      </div>
      <div className={styles.navSection}>
        <h3>About</h3>
        <p>3100 Dundas Street West, Toronto, Ontario M6P 1Z8, Canada</p>
        <p>info@twosisterbeautybar.com</p>
        <p>(416)-920-9500 </p>
        <p>Hours and Access</p>
        <p>Contact Us</p>
      </div>
    </div>
  )
}
