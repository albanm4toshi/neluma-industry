import { useState } from 'react'
import { useLang } from './LanguageContext'
import { translations } from './translations'
import './Gallery.css'

import Post1Part1 from '../assets/Post_1_Part_1.jpg'
import Post1Part2 from '../assets/Post_1_Part_2.jpg'
import Post2 from '../assets/Post_2.jpg'
import Post3Part1 from '../assets/Post_3_Part_1.jpg'
import Post3Part2 from '../assets/Post_3_Part_2.jpg'

const posts = [
  { id: 1, images: [Post1Part1, Post1Part2] },
  { id: 2, images: [Post2] },
  { id: 3, images: [Post3Part1, Post3Part2] },
]

function PostCard({ post, t }) {
  const [current, setCurrent] = useState(0)
  const hasMultiple = post.images.length > 1

  const prev = (e) => { e.preventDefault(); setCurrent(i => (i - 1 + post.images.length) % post.images.length) }
  const next = (e) => { e.preventDefault(); setCurrent(i => (i + 1) % post.images.length) }

  return (
    <div className="post-card">
      <div className="post-card__header">
        <div className="post-card__avatar">
          <img src="logo_real_square.jpg" alt="Neluma Industry" />
        </div>
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

export default function Gallery() {
  const { lang } = useLang()
  const t = translations[lang].gallery

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="gallery__header">
          <div className="section-eyebrow">{t.eyebrow}</div>
          <h2 className="section-title">{t.title}</h2>
        </div>
        <div className="gallery__grid">
          {posts.map(post => (
            <PostCard key={post.id} post={post} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}