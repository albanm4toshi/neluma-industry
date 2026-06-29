import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useLang } from './LanguageContext'
import { translations } from './translations'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, setLang } = useLang()
  const t = translations[lang].nav
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, hash) => {
    e.preventDefault()
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const links = [
    { label: t.about, hash: '#about' },
    { label: t.services, hash: '#services' },
    { label: t.contact, hash: '#contact' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo">
          <img src="/logo.png" alt="Neluma Industry" className="navbar__logo-img" />
        </Link>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {links.map(l => (
            <li key={l.label}>
              <a href={l.hash} onClick={(e) => handleNavClick(e, l.hash)}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="navbar__right">
          <div className="lang-switcher">
            <button className={`lang-btn ${lang === 'al' ? 'lang-btn--active' : ''}`} onClick={() => setLang('al')}>AL</button>
            <span className="lang-divider">|</span>
            <button className={`lang-btn ${lang === 'en' ? 'lang-btn--active' : ''}`} onClick={() => setLang('en')}>EN</button>
          </div>
          <button
            className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}