import { useLang } from './LanguageContext'
import { translations } from './translations'
import './Contact.css'

export default function Contact() {
  const { lang } = useLang()
  const t = translations[lang].contact

  return (
    <section className="contact" id="contact">
      <div className="container contact__inner">

        <div className="contact__left">
          <div className="section-eyebrow">{t.eyebrow}</div>
          <h2 className="section-title">
            {t.title.split('\n').map((line, i) => (
              <span key={i}>{line}{i < 2 && <br />}</span>
            ))}
          </h2>
          <p className="contact__desc">{t.desc}</p>
        </div>

        <div className="contact__right">
          <div className="contact__info">
            <p className="contact__info-label">{t.infoLabel}</p>
            <div className="contact__info-items">
              <div className="contact__info-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <polyline points="2,4 12,13 22,4"/>
                </svg>
                <a href="mailto:neluma.industry@gmail.com" className="contact__info-link">
                  neluma.industry@gmail.com
                </a>
              </div>
              <div className="contact__info-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>{t.location}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}