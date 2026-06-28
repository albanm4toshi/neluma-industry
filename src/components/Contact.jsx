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
        </div>

        <div className="contact__right">
          <div className="contact__card">
            <p className="contact__card-label">Direct Contact</p>
            <p className="contact__card-text">
              Send us a message or reach out directly.
              We respond promptly.
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