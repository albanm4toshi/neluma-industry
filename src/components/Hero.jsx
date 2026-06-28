import { useLang } from './LanguageContext'
import { translations } from './translations'
import './Hero.css'

export default function Hero() {
  const { lang } = useLang()
  const t = translations[lang].hero

  return (
    <section className="hero">
      <div className="hero__bg-line" />
      <div className="container hero__inner">
        <div className="hero__eyebrow">{t.eyebrow}</div>
        <h1 className="hero__title">
          {t.title1}<br />
          <span>{t.title2}</span>
        </h1>
        <p className="hero__subtitle">{t.subtitle}</p>
        <div className="hero__cta">
          <a href="#services" className="btn btn--primary">{t.cta1}</a>
          <a href="#contact" className="btn btn--ghost">{t.cta2}</a>
        </div>
        <div className="hero__badge">
          <div className="hero__badge-inner">
            <span className="hero__badge-label">{t.badgeLabel}</span>
            <span className="hero__badge-name">{t.badgeName}</span>
          </div>
        </div>
      </div>
    </section>
  )
}