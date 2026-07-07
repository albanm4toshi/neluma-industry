import { useState } from 'react'
import { useLang } from './LanguageContext'
import { translations } from './translations'
import { useReveal } from './useReveal'
import { Link } from 'react-router-dom'
import ContactForm from './ContactForm'
import './HomePage.css'

function ProductSlider({ products, lang }) {
  const [current, setCurrent] = useState(0)
  const total = products.length
  const prev = () => setCurrent(i => (i - 1 + total) % total)
  const next = () => setCurrent(i => (i + 1) % total)
  const p = products[current]

  return (
    <div className="pslider">
      {/* Left visual */}
      <div className="pslider__visual">
        <div className="pslider__glow" />
        <span className="pslider__big-num">{String(current + 1).padStart(2, '0')}</span>
        {p.status === 'soon' && (
          <div className="pslider__soon">{lang === 'al' ? 'Së shpejti' : 'Coming Soon'}</div>
        )}
      </div>

      {/* Right content */}
      <div className="pslider__content">
        <div className="pslider__bar">
          <div className="pslider__bar-fill" style={{ width: `${((current + 1) / total) * 100}%` }} />
        </div>

        <div className="pslider__top">
          <span className="pslider__counter">
            <span className="pslider__counter-current">{String(current + 1).padStart(2, '0')}</span>
            <span className="pslider__counter-sep"> / </span>
            <span className="pslider__counter-total">{String(total).padStart(2, '0')}</span>
          </span>
          <div className="pslider__arrows">
            <button className="pslider__arrow" onClick={prev} aria-label="Previous">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            </button>
            <button className="pslider__arrow" onClick={next} aria-label="Next">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>
        </div>

        <div className="pslider__text" key={current}>
          <p className="pslider__tag">{p.tag}</p>
          <h3 className="pslider__name">{p.name}</h3>
          <p className="pslider__desc">{p.desc}</p>
          {p.status === 'active' && (
            <Link to={p.href} className="pslider__cta">
              {p.cta}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          )}
        </div>

        <div className="pslider__dots">
          {products.map((_, i) => (
            <button key={i} className={`pslider__dot ${i === current ? 'pslider__dot--active' : ''}`} onClick={() => setCurrent(i)} aria-label={`Go to ${i + 1}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

const whyIcons = {
  pin: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  globe: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  code: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  support: (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
  </svg>
  ),
}

function WhyCard({ reason, index }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className={`why-card reveal reveal-delay-${index + 1} ${open ? 'why-card--open' : ''}`}
      onClick={() => setOpen(o => !o)}
    >
      <div className="why-card__icon">{whyIcons[reason.icon]}</div>
      <h3 className="why-card__title">{reason.title}</h3>
      <div className="why-card__body">
        <p className="why-card__desc">{reason.desc}</p>
      </div>
      <div className={`why-card__toggle ${open ? 'why-card__toggle--open' : ''}`}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
    </div>
  )
}

export default function HomePage() {
  const { lang } = useLang()
  const t = translations[lang].home
  const aboutRef = useReveal()
  const offerRef = useReveal()
  const whyRef = useReveal()
  const contactRef = useReveal()

  const ct = translations[lang].contact

  return (
    <>
      {/* Hero */}
      <section className="home-hero">
        <div className="home-hero__glow" />
        <div className="container home-hero__inner">
          <div className="home-hero__eyebrow">{t.eyebrow}</div>
          <h1 className="home-hero__title">
            {t.title1}<br />
            <span>{t.title2}</span>
          </h1>
          <p className="home-hero__subtitle">{t.subtitle}</p>
          <div className="home-hero__cta">
            <a href="#products" className="btn btn--primary">
              {t.cta1}
            </a>
            <a href="#contact" className="btn btn--ghost">{t.cta2}</a>
          </div>

        </div>
      </section>

      {/* About */}
      <section className="home-about" id="about" ref={aboutRef}>
        <div className="container home-about__inner">
          <div className="home-about__left">
            <div className="section-eyebrow reveal">{t.aboutEyebrow}</div>
            <h2 className="section-title reveal reveal-delay-1">{t.aboutTitle}</h2>
          </div>
          <div className="home-about__right">
            <p className="reveal reveal-delay-2">{t.aboutP1}</p>
            <p className="reveal reveal-delay-3">{t.aboutP2}</p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="home-products" id="products" ref={offerRef}>
        <div className="container">
          <div className="section-eyebrow reveal">{t.offerEyebrow}</div>
          <h2 className="section-title reveal reveal-delay-1">{t.offerTitle}</h2>
          <p className="home-products__sub reveal reveal-delay-2">{t.offerSubtitle}</p>

          <div className="reveal reveal-delay-2">
            <ProductSlider products={t.products} lang={lang} />
          </div>
        </div>
      </section>

      {/* Why Neluma */}
      <section className="home-why" ref={whyRef}>
        <div className="container">
          <div className="home-why__header">
            <div className="section-eyebrow reveal">{t.whyEyebrow}</div>
            <h2 className="section-title reveal reveal-delay-1">{t.whyTitle}</h2>
          </div>
          <div className="home-why__grid">
            {t.reasons.map((r, i) => (
              <WhyCard key={i} reason={r} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="home-contact" id="contact" ref={contactRef}>
        <div className="container">
          <div className="home-contact__header">
            <div className="section-eyebrow reveal">{ct.eyebrow}</div>
            <h2 className="section-title reveal reveal-delay-1">
              {ct.title.split('\n').map((line, i) => (
                <span key={i}>{line}{i < 2 && ' '}</span>
              ))}
            </h2>
            <p className="home-contact__desc reveal reveal-delay-2">{ct.desc}</p>
          </div>

          <div className="home-contact__grid">
            <div className="home-contact__form reveal reveal-delay-2">
              <ContactForm />
            </div>

            <div className="home-contact__info reveal reveal-delay-3">
              <div className="info-card">
                <div className="info-card__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/>
                  </svg>
                </div>
                <div className="info-card__body">
                  <p className="info-card__label">{ct.infoEmailLabel}</p>
                  <a href="mailto:neluma.industry@gmail.com" className="info-card__value info-card__value--link">
                    neluma.industry@gmail.com
                  </a>
                </div>
              </div>

              <div className="info-card">
                <div className="info-card__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="info-card__body">
                  <p className="info-card__label">{ct.infoLocationLabel}</p>
                  <p className="info-card__value">{ct.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}