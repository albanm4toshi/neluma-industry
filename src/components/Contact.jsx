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
          <div className="contact__card">
            <p className="contact__card-label">{t.cardLabel}</p>
            <p className="contact__card-text">{t.cardText}</p>
            <div className="contact__card-actions">
              <a href="https://www.instagram.com/neluma.industry/" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                {t.instagram}
              </a>
              <a href="https://www.facebook.com/profile.php?id=61591171350782" target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                {t.facebook}
              </a>
              <a href="mailto:neluma.industry@gmail.com" className="btn btn--ghost">
                {t.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}