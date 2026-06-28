import './Contact.css'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container contact__inner">
        <div className="contact__left">
          <div className="section-eyebrow">Get in Touch</div>
          <h2 className="section-title">
            Ready to bring<br />imos iX to your<br />business?
          </h2>
          <p className="contact__desc">
            Whether you're exploring imos iX for the first time or ready to get started,
            reach out and we'll guide you through every step.
          </p>
          <div className="contact__socials">
            <a
              href="https://www.instagram.com/neluma.industry/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-link"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
              Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61591171350782"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-link"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
              Facebook
            </a>
            <a
              href="mailto:neluma.industry@gmail.com"
              className="contact__social-link"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <polyline points="2,4 12,13 22,4"/>
              </svg>
              neluma.industry@gmail.com
            </a>
          </div>
        </div>

        <div className="contact__right">
          <div className="contact__card">
            <p className="contact__card-label">Direct Contact</p>
            <p className="contact__card-text">
              Send us a message on our social channels or reach out directly.
              We respond promptly and in your preferred language.
            </p>
            <div className="contact__card-actions">
              <a
                href="https://www.instagram.com/neluma.industry/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                Message on Instagram
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61591171350782"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
              >
                Message on Facebook
              </a>
              <a
                href="mailto:neluma.industry@gmail.com"
                className="btn btn--ghost"
              >
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
