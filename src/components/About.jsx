import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about__inner">
        <div className="about__left">
          <div className="section-eyebrow">About Us</div>
          <h2 className="section-title">
            The bridge between<br />imos iX and Kosovo.
          </h2>
        </div>
        <div className="about__right">
          <p>
            Neluma Industry is the officially appointed distributor of imos iX for Kosovo.
            imos iX is a leading German software solution purpose-built for the furniture
            industry — trusted by manufacturers and designers across Europe for precision,
            efficiency, and professional output.
          </p>
          <p>
            Our role goes beyond simply selling a license. We are your local partner
            for every stage of the software journey: from first consultation and installation
            to ongoing support and training. We speak your language and understand the
            local market.
          </p>
          <div className="about__stats">
            <div className="about__stat">
              <span className="about__stat-value">imos iX</span>
              <span className="about__stat-label">Official Software</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-value">Kosovo</span>
              <span className="about__stat-label">Exclusive Territory</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-value">DE</span>
              <span className="about__stat-label">German Engineering</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
