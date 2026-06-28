import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg-line" />
      <div className="container hero__inner">
        <div className="hero__eyebrow">Official Distribution Partner · Kosovo</div>
        <h1 className="hero__title">
          imos iX<br />
          <span>in Kosovo.</span>
        </h1>
        <p className="hero__subtitle">
          Neluma Industry is the official distributor of imos iX — the leading German
          furniture design and manufacturing software — for the Kosovo market.
        </p>
        <div className="hero__cta">
          <a href="#services" className="btn btn--primary">Our Services</a>
          <a href="#contact" className="btn btn--ghost">Get in Touch</a>
        </div>

        <div className="hero__badge">
          <div className="hero__badge-inner">
            <span className="hero__badge-label">Powered by</span>
            <span className="hero__badge-name">Neluma Industry</span>
          </div>
        </div>
      </div>
    </section>
  )
}
