import { useState } from 'react'
import { useLang } from './LanguageContext'
import { translations } from './translations'
import './ContactForm.css'

export default function ContactForm({ t: tProp, formName = 'contact' }) {
  const { lang } = useLang()
  // Use passed translation object, or fall back to home contact
  const t = tProp || translations[lang].contact
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})
  const [values, setValues] = useState({ name: '', email: '', company: '', message: '' })

  const encode = (data) => Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')

  const validate = () => {
    const newErrors = {}
    if (!values.name.trim()) newErrors.name = t.errName
    if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) newErrors.email = t.errEmail
    if (!values.message.trim()) newErrors.message = t.errMessage
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues(v => ({ ...v, [name]: value }))
    if (errors[name]) setErrors(err => ({ ...err, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setStatus('sending')
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': formName, ...values }),
      })
      setStatus('success')
      setValues({ name: '', email: '', company: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="cform-card">
      <div className="cform-card__head">
        <div className="cform-card__icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </div>
        <div>
          <h3 className="cform-card__title">{t.formTitle}</h3>
          <p className="cform-card__sub">{t.formSubtitle}</p>
        </div>
      </div>

      <form
        name={formName}
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="cform"
        noValidate
      >
        <input type="hidden" name="form-name" value={formName} />
        <p className="cform__hidden"><label>Don't fill: <input name="bot-field" /></label></p>

        <div className="cform__row">
          <div className="cform__field">
            <label className="cform__label">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
              {t.formName} <span>*</span>
            </label>
            <input
              type="text" name="name" value={values.name} onChange={handleChange}
              placeholder={t.formNamePlaceholder}
              className={errors.name ? 'cform__input--error' : ''}
            />
            {errors.name && <span className="cform__error">{errors.name}</span>}
          </div>
          <div className="cform__field">
            <label className="cform__label">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/>
              </svg>
              {t.formEmail} <span>*</span>
            </label>
            <input
              type="email" name="email" value={values.email} onChange={handleChange}
              placeholder={t.formEmailPlaceholder}
              className={errors.email ? 'cform__input--error' : ''}
            />
            {errors.email && <span className="cform__error">{errors.email}</span>}
          </div>
        </div>

        <div className="cform__field">
          <label className="cform__label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/>
            </svg>
            {t.formCompany}
          </label>
          <input
            type="text" name="company" value={values.company} onChange={handleChange}
            placeholder={t.formCompanyPlaceholder}
          />
        </div>

        <div className="cform__field">
          <label className="cform__label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            {t.formMessage} <span>*</span>
          </label>
          <textarea
            name="message" value={values.message} onChange={handleChange} rows="5"
            placeholder={t.formMessagePlaceholder}
            className={errors.message ? 'cform__input--error' : ''}
          />
          {errors.message && <span className="cform__error">{errors.message}</span>}
        </div>

        <button type="submit" className="cform__submit" disabled={status === 'sending'}>
          {status === 'sending' ? t.formSending : t.formSubmit}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
        </button>

        {status === 'success' && <p className="cform__msg cform__msg--success">{t.formSuccess}</p>}
        {status === 'error' && <p className="cform__msg cform__msg--error">{t.formError}</p>}
      </form>
    </div>
  )
}