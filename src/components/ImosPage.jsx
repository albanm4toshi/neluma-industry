import { useState, useRef } from 'react'
import { useLang } from './LanguageContext'
import { translations } from './translations'
import { useReveal } from './useReveal'
import { Link } from 'react-router-dom'
import ContactForm from './ContactForm'

import Post1Part1 from '../assets/Post_1_Part_1.jpg'
import Post1Part2 from '../assets/Post_1_Part_2.jpg'
import Post2 from '../assets/Post_2.jpg'
import Post3Part1 from '../assets/Post_3_Part_1.jpg'
import Post3Part2 from '../assets/Post_3_Part_2.jpg'
import imosVideo from '../assets/imos-video.mp4'

import './ImosPage.css'

const posts = [
  { id: 1, images: [Post1Part1, Post1Part2] },
  { id: 2, images: [Post2] },
  { id: 3, images: [Post3Part1, Post3Part2] },
]

function VideoPlayer({ src, poster, badge, duration }) {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)

  const handlePlay = () => {
    setPlaying(true)
    setTimeout(() => videoRef.current?.play(), 50)
  }

  return (
    <div className="imos-vplayer">
      {!playing && (
        <div
          className="imos-vplayer__poster"
          onClick={handlePlay}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handlePlay()}
          aria-label="Play video"
        >
          {poster && <img src={poster} alt="" className="imos-vplayer__poster-img" />}
          <div className="imos-vplayer__overlay" />
          <div className="imos-vplayer__ui">
            <div className="imos-vplayer__badge">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              {badge}
            </div>
            <button className="imos-vplayer__play-btn" aria-hidden="true" tabIndex={-1}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            </button>
            <span className="imos-vplayer__hint">{duration}</span>
          </div>
        </div>
      )}
      <video
        ref={videoRef}
        className="imos-vplayer__video"
        style={{ display: playing ? 'block' : 'none' }}
        controls
        preload="none"
        onEnded={() => setPlaying(false)}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  )
}

function PostCard({ post, t }) {
  const [current, setCurrent] = useState(0)
  const hasMultiple = post.images.length > 1
  const prev = (e) => { e.preventDefault(); setCurrent(i => (i - 1 + post.images.length) % post.images.length) }
  const next = (e) => { e.preventDefault(); setCurrent(i => (i + 1) % post.images.length) }

  return (
    <div className="post-card">
      <div className="post-card__header">
        <div className="post-card__avatar"><img src="/logo_real_square.jpg" alt="Neluma Industry" /></div>
        <div className="post-card__meta">
          <span className="post-card__username">neluma.industry</span>
          <span className="post-card__tag">{t.tag}</span>
        </div>
        <svg className="post-card__ig-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
        </svg>
      </div>
      <div className="post-card__img-wrap">
        <img src={post.images[current]} alt={`Post ${post.id}`} className="post-card__img" />
        {hasMultiple && (
          <>
            <button className="post-card__arrow post-card__arrow--left" onClick={prev}>&#8249;</button>
            <button className="post-card__arrow post-card__arrow--right" onClick={next}>&#8250;</button>
            <div className="post-card__dots">
              {post.images.map((_, i) => (
                <span key={i} className={`post-card__dot ${i === current ? 'post-card__dot--active' : ''}`} onClick={() => setCurrent(i)} />
              ))}
            </div>
            <div className="post-card__counter">{current + 1} / {post.images.length}</div>
          </>
        )}
      </div>
      <div className="post-card__footer">
        <a href="https://www.instagram.com/neluma.industry/" target="_blank" rel="noopener noreferrer" className="post-card__view-btn">
          {t.viewOn}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
      </div>
    </div>
  )
}

function ServiceCard({ item, index }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className={`imos-scard ${open ? 'imos-scard--open' : ''}`}
      onClick={() => setOpen(o => !o)}
    >
      <div className="imos-scard__num">{String(index + 1).padStart(2, '0')}</div>
      <div className="imos-scard__head">
        <h3 className="imos-scard__title">{item.title}</h3>
        <div className={`imos-scard__toggle ${open ? 'imos-scard__toggle--open' : ''}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </div>
      <div className="imos-scard__body">
        <p className="imos-scard__desc">{item.description}</p>
      </div>
    </div>
  )
}

export default function ImosPage() {
  const { lang } = useLang()
  const t = translations[lang].imos
  const aboutRef = useReveal()
  const servicesRef = useReveal()
  const galleryRef = useReveal()
  const contactRef = useReveal()

  return (
    <>
      {/* Breadcrumb */}
      <div className="imos-breadcrumb">
        <div className="container">
          <Link to="/" className="imos-breadcrumb__link">Neluma Industry</Link>
          <span className="imos-breadcrumb__sep">›</span>
          <span className="imos-breadcrumb__current">imos iX</span>
        </div>
      </div>

      {/* Hero */}
      <section className="imos-hero">
        <div className="imos-hero__glow" />
        <div className="container imos-hero__inner">
          <div className="imos-hero__eyebrow">{t.hero.eyebrow}</div>
          <h1 className="imos-hero__title">
            {t.hero.title1}<br />
            <span>{t.hero.title2}</span>
          </h1>
          <p className="imos-hero__subtitle">{t.hero.subtitle}</p>
          <div className="imos-hero__cta">
            <a href="#imos-services" className="btn btn--primary">{t.hero.cta1}</a>
            <a href="#imos-contact" className="btn btn--ghost">{t.hero.cta2}</a>
          </div>
          <div className="imos-hero__badge">
            <div className="imos-hero__badge-row">
              <span className="imos-hero__badge-label">{t.hero.badgeLabel}</span>
              <span className="imos-hero__badge-name">Neluma Industry</span>
            </div>
            <div className="imos-hero__badge-row imos-hero__badge-row--partners">
              <span className="imos-hero__badge-partner-label">{t.hero.inPartnership}</span>
              <span className="imos-hero__badge-partners">MOS Consult &amp; imos AG</span>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="imos-about" id="imos-about" ref={aboutRef}>
        <div className="container imos-about__inner">
          <div className="imos-about__left">
            <div className="section-eyebrow reveal">{t.about.eyebrow}</div>
            <h2 className="section-title reveal reveal-delay-1">{t.about.title}</h2>
          </div>
          <div className="imos-about__right">
            <p className="reveal reveal-delay-2">{t.about.p1}</p>
            <p className="reveal reveal-delay-3">{t.about.p2}</p>
            <div className="imos-about__stats reveal reveal-delay-4">
              <div className="imos-about__stat">
                <span className="imos-about__stat-value">{t.about.stat1value}</span>
                <span className="imos-about__stat-label">{t.about.stat1label}</span>
              </div>
              <div className="imos-about__stat">
                <span className="imos-about__stat-value">{t.about.stat2value}</span>
                <span className="imos-about__stat-label">{t.about.stat2label}</span>
              </div>
              <div className="imos-about__stat">
                <span className="imos-about__stat-value">{t.about.stat3value}</span>
                <span className="imos-about__stat-label">{t.about.stat3label}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Video */}
        <div className="container imos-about__video-wrap reveal reveal-delay-2">
  <VideoPlayer
    src={imosVideo}
    badge={t.about.badge}

  />
</div>
      </section>

      {/* Services */}
      <section className="imos-services" id="imos-services" ref={servicesRef}>
        <div className="container">
          <div className="imos-services__header">
            <div className="section-eyebrow reveal">{t.services.eyebrow}</div>
            <h2 className="section-title reveal reveal-delay-1">
              {t.services.title.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h2>
          </div>
          <div className="imos-services__grid reveal reveal-delay-2">
            {t.services.items.map((item, i) => (
              <ServiceCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="imos-gallery" id="imos-gallery" ref={galleryRef}>
        <div className="container">
          <div className="section-eyebrow reveal">{t.gallery.eyebrow}</div>
          <h2 className="section-title reveal reveal-delay-1">{t.gallery.title}</h2>
          <div className="imos-gallery__grid">
            {posts.map((post, i) => (
              <div key={post.id} className={`reveal reveal-delay-${i + 2}`}>
                <PostCard post={post} t={t.gallery} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="imos-contact" id="imos-contact" ref={contactRef}>
        <div className="container">
          <div className="imos-contact__header">
            <div className="section-eyebrow reveal">{t.contact.eyebrow}</div>
            <h2 className="section-title reveal reveal-delay-1">
              {t.contact.title.split('\n').map((line, i) => (
                <span key={i}>{line}{i < 2 && ' '}</span>
              ))}
            </h2>
            <p className="imos-contact__desc reveal reveal-delay-2">{t.contact.desc}</p>
          </div>

          <div className="imos-contact__grid">
            <div className="imos-contact__form reveal reveal-delay-2">
              <ContactForm t={t.contact} formName="imos-quote" />
            </div>

            <div className="imos-contact__info reveal reveal-delay-3">
              <div className="imos-info-card">
                <div className="imos-info-card__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/>
                  </svg>
                </div>
                <div>
                  <p className="imos-info-card__label">{t.contact.infoEmailLabel}</p>
                  <a href="mailto:neluma.industry@gmail.com" className="imos-info-card__value imos-info-card__value--link">neluma.industry@gmail.com</a>
                </div>
              </div>
              <div className="imos-info-card">
                <div className="imos-info-card__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p className="imos-info-card__label">{t.contact.infoLocationLabel}</p>
                  <p className="imos-info-card__value">{t.contact.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}