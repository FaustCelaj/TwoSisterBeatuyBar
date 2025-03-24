import './Footer.scss'
import Content from './Content'

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-sticky-container">
        <div className="footer-sticky-content">
          <Content />
        </div>
      </div>
    </div>
  )
}
