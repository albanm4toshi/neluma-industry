import { useLang } from './LanguageContext'
import { translations } from './translations'
import './About.css'

export default function About() {
  const { lang } = useLang()
  const t = translations[lang].about

  return (
    <section className="about" id="about">
      <div className="container about__inner">
        <div className="about__left">
          <div className="section-eyebrow">{t.eyebrow}</div>
          <h2 className="section-title">{t.title}</h2>
        </div>
        <div className="about__right">
          <p>{t.p1}</p>
          <p>{t.p2}</p>
          <div className="about__stats">
            <div className="about__stat">
              <span className="about__stat-value">{t.stat1value}</span>
              <span className="about__stat-label">{t.stat1label}</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-value">{t.stat2value}</span>
              <span className="about__stat-label">{t.stat2label}</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-value">{t.stat3value}</span>
              <span className="about__stat-label">{t.stat3label}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}