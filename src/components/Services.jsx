import { useLang } from './LanguageContext'
import { translations } from './translations'
import './Services.css'

export default function Services() {
  const { lang } = useLang()
  const t = translations[lang].services

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__header">
          <div className="section-eyebrow">{t.eyebrow}</div>
          <h2 className="section-title">{t.title.split('\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}</h2>
        </div>
        <div className="services__grid">
          {t.items.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="service-card__num">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}