import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useLang } from './LanguageContext'
import { translations } from './translations'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { lang, setLang } = useLang()
  const t = translations[lang].nav
  const navigate = useNavigate()
  const location = useLocation()
  const dropdownRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleHomeClick = (e) => {
    e.preventDefault()
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
    }
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50)
  }

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

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo" onClick={handleHomeClick}>
          <img src="/logo.png" alt="Neluma Industry" className="navbar__logo-img" />
        </Link>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <li><a href="/" onClick={handleHomeClick}>{t.home}</a></li>

          {/* Products dropdown */}
          <li className="navbar__dropdown-wrap" ref={dropdownRef}>
            <button
              className="navbar__dropdown-trigger"
              onClick={() => setDropdownOpen(o => !o)}
            >
              {t.products}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={dropdownOpen ? 'rotated' : ''}>
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            {dropdownOpen && (
              <div className="navbar__dropdown">
                <Link
                  to="/products/imos-ix"
                  className="navbar__dropdown-item"
                  onClick={() => { setDropdownOpen(false); setMenuOpen(false) }}
                >
                  <span className="navbar__dropdown-name">imos iX</span>
                  <span className="navbar__dropdown-tag">{lang === 'al' ? 'Softuer Mobiljesh' : 'Furniture Software'}</span>
                </Link>
              </div>
            )}
          </li>

          <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>{t.about}</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>{t.contact}</a></li>
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