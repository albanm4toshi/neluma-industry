import { useLang } from './LanguageContext'
import { translations } from './translations'
import { Link } from 'react-router-dom'
import './Footer.css'

const socials = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/neluma.industry/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61591171350782',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/neluma-industry/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const { lang } = useLang()
  const t = translations[lang].footer

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <span className="footer__brand">Neluma Industry</span>
          <p className="footer__tagline">{t.tagline}</p>
        </div>

        <div className="footer__socials">
          {socials.map(s => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              aria-label={s.name}
              title={s.name}
            >
              {s.icon}
            </a>
          ))}
        </div>

        <div className="footer__right">
          <p>© {new Date().getFullYear()} Neluma Industry. {t.rights}</p>
          <Link to="/privacy-policy" className="footer__privacy">
            {lang === 'al' ? 'Politika e Privatësisë' : 'Privacy Policy'}
          </Link>
        </div>
      </div>
    </footer>
  )
}