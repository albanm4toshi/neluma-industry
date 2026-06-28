import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <span className="footer__logo">Neluma<span>Industry</span></span>
          <p>Official imos iX Distributor — Kosovo</p>
        </div>
        <div className="footer__right">
          <p>© {new Date().getFullYear()} Neluma Industry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
