import { useLang } from './LanguageContext'
import { translations } from './translations'
import './Footer.css'

export default function Footer() {
  const { lang } = useLang()
  const t = translations[lang].footer

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <span className="footer__brand">Neluma Industry</span>
          <p>{t.tagline}</p>
        </div>
        <div className="footer__right">
          <p>© {new Date().getFullYear()} Neluma Industry. {t.rights}</p>
        </div>
      </div>
    </footer>
  )
}