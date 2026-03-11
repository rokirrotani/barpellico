import './Contatti.css'

const info = [
  {
    icon: '◎',
    title: 'Indirizzo',
    lines: [
      {
        text: 'Corso Italia, 75 — 12037 Saluzzo (CN)',
        href: 'https://www.google.com/maps/place/Caffe\'+Pellico/@44.6457269,7.4878673,773m/data=!3m2!1e3!4b1!4m6!3m5!1s0x12cd4903139ae247:0x315828f8eb6ca9e!8m2!3d44.6457231!4d7.4904422!16s%2Fg%2F12hl55my5',
        label: 'Maps',
      },
    ],
  },
  {
    icon: '◷',
    title: 'Orari',
    lines: [
      'Lunedì: 07:00 – 21:00',
      'Martedì: Chiuso',
      'Merc – Giov: 07:00 – 21:00',
      'Venerdì – Sab: 07:00 – 00:00',
      'Domenica: 08:00 – 21:00',
    ],
  },
  {
    icon: '◌',
    title: 'Contatti',
    lines: [
      { text: '+39 0175 211012', href: 'tel:+390175211012' },
      { text: 'WhatsApp', href: 'https://wa.me/390175211012', label: 'WhatsApp' },
      { text: '@caffe_pellico', href: 'https://www.instagram.com/caffe_pellico/', label: 'Instagram' },
      { text: 'Caffè Pellico', href: 'https://www.facebook.com/p/Caff%C3%A8-Pellico-100088418388482/', label: 'Facebook' },
    ],
  },
]

export default function Contatti() {
  return (
    <div className="contatti-page">

      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-content">
          <p className="section-label fade-up">Siamo qui per te</p>
          <h1 className="fade-up fade-up-delay-1">Contatti</h1>
        </div>
      </section>

      {/* Info Grid */}
      <section className="section contatti-info">
        <div className="contatti-info__grid">
          {info.map(item => (
            <div key={item.title} className="contatti-info__card">
              <span className="contatti-info__icon">{item.icon}</span>
              <h3 className="contatti-info__title">{item.title}</h3>
              {item.lines.map((line, idx) => (
                <p key={idx} className="contatti-info__line">
                  {typeof line === 'string' ? line : (
                    <a
                      href={line.href}
                      target={line.href.startsWith('http') ? '_blank' : undefined}
                      rel={line.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="contatti-info__link"
                    >
                      {line.label && <span className="contatti-info__link-label">{line.label}&#8194;</span>}
                      {line.text}
                    </a>
                  )}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <hr className="gold" style={{ maxWidth: 1200, margin: '0 auto' }} />

      {/* Form */}
      <section className="section contatti-form-section">
        <div className="contatti-form-wrap">
          <div className="contatti-form-text">
            <p className="section-label">Scrivici</p>
            <h2 className="section-title">
              Hai domande o<br />vuoi prenotare?
            </h2>
            <div className="gold-divider" style={{ maxWidth: 180, margin: '0.5rem 0 1.5rem' }}>
              <span>—</span>
            </div>
            <p className="section-subtitle">
              Compila il modulo e ti risponderemo entro 24 ore. Per prenotazioni urgenti
              preferisci chiamarci direttamente.
            </p>
          </div>

          <form className="contatti-form" onSubmit={e => e.preventDefault()} noValidate>
            <div className="contatti-form__row">
              <div className="contatti-form__group">
                <label htmlFor="cf-nome">Nome *</label>
                <input type="text" id="cf-nome" name="nome" required autoComplete="given-name" />
              </div>
              <div className="contatti-form__group">
                <label htmlFor="cf-cognome">Cognome *</label>
                <input type="text" id="cf-cognome" name="cognome" required autoComplete="family-name" />
              </div>
            </div>
            <div className="contatti-form__group">
              <label htmlFor="cf-email">Email *</label>
              <input type="email" id="cf-email" name="email" required autoComplete="email" />
            </div>
            <div className="contatti-form__group">
              <label htmlFor="cf-telefono">Telefono</label>
              <input type="tel" id="cf-telefono" name="telefono" autoComplete="tel" />
            </div>
            <div className="contatti-form__group">
              <label htmlFor="cf-oggetto">Oggetto *</label>
              <select id="cf-oggetto" name="oggetto" required>
                <option value="">Seleziona un oggetto</option>
                <option value="prenotazione">Prenotazione tavolo</option>
                <option value="info">Informazioni generali</option>
                <option value="evento">Evento privato</option>
                <option value="altro">Altro</option>
              </select>
            </div>
            <div className="contatti-form__group">
              <label htmlFor="cf-messaggio">Messaggio *</label>
              <textarea id="cf-messaggio" name="messaggio" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-gold contatti-form__submit">
              <span>Invia Messaggio</span>
            </button>
          </form>
        </div>
      </section>

      {/* Map */}
      <section className="contatti-map">
        <iframe
          title="Caffè Pellico — Google Maps"
          src="https://maps.google.com/maps?q=44.6457231,7.4904422&z=17&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <a
          href="https://www.google.com/maps/place/Caff%C3%A8+Pellico/@44.6457269,7.4878673,773m/data=!3m2!1e3!4b1!4m6!3m5!1s0x12cd4903139ae247:0x315828f8eb6ca9e!8m2!3d44.6457231!4d7.4904422!16s%2Fg%2F12hl55my5"
          target="_blank"
          rel="noopener noreferrer"
          className="contatti-map__label"
        >
          <span>◎</span>
          <p>Corso Italia, 75 — 12037 Saluzzo (CN) › Apri in Maps</p>
        </a>
      </section>

    </div>
  )
}
