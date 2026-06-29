import { useEffect } from 'react'
import { useLang } from './LanguageContext'
import './PrivacyPolicy.css'

const content = {
  al: {
    title: 'Politika e Privatësisë',
    updated: 'Përditësuar: Qershor 2026',
    sections: [
      {
        title: '1. Hyrje',
        text: 'Neluma Industry ("ne", "neve") respekton privatësinë tuaj. Kjo Politikë e Privatësisë shpjegon se si mbledhim, përdorim dhe mbrojmë informacionin tuaj kur vizitoni faqen tonë të internetit neluma-industry.com.',
      },
      {
        title: '2. Informacioni që Mbledhim',
        text: 'Faqja jonë është një faqe informative. Ne nuk mbledhim drejtpërdrejt të dhëna personale si emrin, adresën ose informacionin e pagesës. Megjithatë, si shumica e faqeve të internetit, kur vizitoni faqen tonë, serveri mund të regjistrojë automatikisht informacion bazë si adresa IP, lloji i shfletuesit dhe faqet e vizituara.',
      },
      {
        title: '3. Google Fonts',
        text: 'Faqja jonë përdor Google Fonts për të shfaqur tiparet e shkronjave. Kjo do të thotë që shfletuesi juaj lidhet me serverët e Google kur vizitoni faqen tonë. Google mund të mbledhë disa të dhëna teknike si adresa juaj IP. Për më shumë informacion, shihni Politikën e Privatësisë të Google: https://policies.google.com/privacy',
      },
      {
        title: '4. Cookies',
        text: 'Faqja jonë nuk përdor cookies për gjurmim ose analitikë. Shfletuesi juaj mund të ruajë cookie-t teknike të nevojshme për funksionimin e faqes.',
      },
      {
        title: '5. Lidhjet me Platformat e Jashtme',
        text: 'Faqja jonë përmban lidhje me Instagram, Facebook dhe LinkedIn. Kur klikoni këto lidhje, do të ridrejtoheni në platformat e tyre dhe do t\'u nënshtrohen politikave të tyre të privatësisë. Ne nuk kemi kontroll mbi të dhënat që mbledhin ato platforma.',
      },
      {
        title: '6. Si na Kontaktoni',
        text: 'Nëse keni pyetje rreth kësaj Politike të Privatësisë, na kontaktoni në: neluma.industry@gmail.com',
      },
      {
        title: '7. Ndryshimet në këtë Politikë',
        text: 'Ne mund të përditësojmë herë pas here këtë Politikë të Privatësisë. Çdo ndryshim do të publikohet në këtë faqe me datën e përditësimit.',
      },
    ],
  },
  en: {
    title: 'Privacy Policy',
    updated: 'Last updated: June 2026',
    sections: [
      {
        title: '1. Introduction',
        text: 'Neluma Industry ("we", "our") respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website neluma-industry.com.',
      },
      {
        title: '2. Information We Collect',
        text: 'Our website is an informational site. We do not directly collect personal data such as your name, address, or payment information. However, like most websites, when you visit our site, the server may automatically log basic information such as your IP address, browser type, and pages visited.',
      },
      {
        title: '3. Google Fonts',
        text: 'Our website uses Google Fonts to display typography. This means your browser connects to Google\'s servers when you visit our site. Google may collect some technical data such as your IP address. For more information, see Google\'s Privacy Policy: https://policies.google.com/privacy',
      },
      {
        title: '4. Cookies',
        text: 'Our website does not use cookies for tracking or analytics purposes. Your browser may store technical cookies necessary for the basic functioning of the site.',
      },
      {
        title: '5. Links to External Platforms',
        text: 'Our website contains links to Instagram, Facebook, and LinkedIn. When you click these links, you will be redirected to their platforms and will be subject to their respective privacy policies. We have no control over the data those platforms collect.',
      },
      {
        title: '6. Contact Us',
        text: 'If you have any questions about this Privacy Policy, please contact us at: neluma.industry@gmail.com',
      },
      {
        title: '7. Changes to This Policy',
        text: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date.',
      },
    ],
  },
}

export default function PrivacyPolicy() {
  const { lang } = useLang()
  const t = content[lang]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="privacy">
      <div className="container privacy__inner">
        <div className="privacy__header">
          <h1 className="privacy__title">{t.title}</h1>
          <p className="privacy__updated">{t.updated}</p>
        </div>
        <div className="privacy__content">
          {t.sections.map((s, i) => (
            <div className="privacy__section" key={i}>
              <h2 className="privacy__section-title">{s.title}</h2>
              <p className="privacy__section-text">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
