import './Services.css'

const services = [
  {
    title: 'Installation & Configuration',
    description:
      'Full on-site or remote setup of imos iX tailored to your hardware and business workflow. We handle everything from environment preparation to first launch.',
  },
  {
    title: 'Licensing & Quoting',
    description:
      'We manage the entire licensing process locally — from evaluating which imos iX package fits your needs to preparing and processing your official quote.',
  },
  {
    title: 'Contract Processing',
    description:
      'All contracts and agreements are handled directly by Neluma Industry as your local partner, ensuring clarity, compliance, and communication in your language.',
  },
  {
    title: 'Training',
    description:
      'Hands-on training sessions for your team to get productive with imos iX quickly — from basic navigation to advanced furniture design and production workflows.',
  },
  {
    title: 'Technical Support',
    description:
      'Ongoing local support for any issues, updates, or questions. You deal with us — no language barriers, no waiting for overseas response times.',
  },
  {
    title: 'Consultation',
    description:
      'Not sure if imos iX is the right fit? We offer professional consultations to understand your business and recommend the right software configuration.',
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__header">
          <div className="section-eyebrow">What We Do</div>
          <h2 className="section-title">Everything imos iX,<br />locally handled.</h2>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="service-card__num">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
