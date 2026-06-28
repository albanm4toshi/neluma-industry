import { useState } from 'react'
import './Gallery.css'

import Post1Part1 from '../assets/Post_1_Part_1.jpg'
import Post1Part2 from '../assets/Post_1_Part_2.jpg'
import Post2 from '../assets/Post_2.jpg'
import Post3Part1 from '../assets/Post_3_Part_1.jpg'
import Post3Part2 from '../assets/Post_3_Part_2.jpg'

const posts = [
  {
    id: 1,
    images: [Post1Part1, Post1Part2],
  },
  {
    id: 2,
    images: [Post2],
  },
  {
    id: 3,
    images: [Post3Part1, Post3Part2],
  },
]

function PostCard({ post }) {
  const [current, setCurrent] = useState(0)
  const hasMultiple = post.images.length > 1

  const prev = () => setCurrent(i => (i - 1 + post.images.length) % post.images.length)
  const next = () => setCurrent(i => (i + 1) % post.images.length)

  return (
    <div className="post-card">
      <div className="post-card__img-wrap">
        <img
          src={post.images[current]}
          alt={`Post ${post.id}`}
          className="post-card__img"
        />
        {hasMultiple && (
          <>
            <button className="post-card__arrow post-card__arrow--left" onClick={prev}>
              &#8249;
            </button>
            <button className="post-card__arrow post-card__arrow--right" onClick={next}>
              &#8250;
            </button>
            <div className="post-card__dots">
              {post.images.map((_, i) => (
                <span
                  key={i}
                  className={`post-card__dot ${i === current ? 'post-card__dot--active' : ''}`}
                  onClick={() => setCurrent(i)}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <a
        href="https://www.instagram.com/neluma.industry/"
        target="_blank"
        rel="noopener noreferrer"
        className="post-card__link"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
        </svg>
        View on Instagram
      </a>
    </div>
  )
}

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="gallery__header">
          <div className="section-eyebrow">Latest Posts</div>
          <h2 className="section-title">From our Instagram.</h2>
        </div>
        <div className="gallery__grid">
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        <div className="gallery__cta">
          <a
            href="https://www.instagram.com/neluma.industry/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
          >
            Follow @neluma.industry
          </a>
        </div>
      </div>
    </section>
  )
}
