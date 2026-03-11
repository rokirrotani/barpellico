import './ChiSiamo.css'

const team = [
  {
    name: 'Marco Pellico',
    role: 'Fondatore & Barista Master',
    bio: 'Fondatore di Caffè Pellico, porta la sua passione per il caffè artigianale ogni giorno dal 2022.',
  },
  {
    name: 'Laura Esposito',
    role: 'Chef de Cuisine',
    bio: 'Cuoca con anima milanese e cuore siciliano. Ogni piatto è un racconto d\'ingredienti e memoria.',
  },
  {
    name: 'Giulio Ferrara',
    role: 'Sommelier & Mixologist',
    bio: 'Esperto di vini italiani e cocktail di design. Crea abbinamenti che sorprendono e raccontano.',
  },
]

export default function ChiSiamo() {
  return (
    <div className="chi-siamo-page">

      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-content">
          <p className="section-label fade-up">La Nostra Identità</p>
          <h1 className="fade-up fade-up-delay-1">Chi Siamo</h1>
        </div>
      </section>

      {/* Storia */}
      <section className="cs-storia section">
        <div className="cs-storia__grid">
          <div>
            <p className="section-label">La Nostra Storia</p>
            <h2 className="section-title">
              Nati dalla passione,<br />
              <em>cresciuti con voi</em>
            </h2>
            <div className="gold-divider" style={{ maxWidth: 200, margin: '0.5rem 0 2rem' }}>
              <span>—</span>
            </div>
            <p className="section-subtitle" style={{ marginBottom: '1.5rem' }}>
              Caffè Pellico apre le sue porte il <strong>20 Dicembre 2022</strong> con un sogno semplice: creare un luogo
              dove ogni persona si sentisse accolta, dove il caffè fosse sempre perfetto e
              il cibo raccontasse la migliore tradizione italiana.
            </p>
            <p className="cs-text">
              Negli anni abbiamo accolto migliaia di clienti, diventando un punto di
              riferimento per il quartiere. La nostra filosofia è rimasta immutata: qualità
              senza compromessi, accoglienza autentica, rispetto per le materie prime.
            </p>
          </div>
          <div className="cs-storia__visual">
            <div className="cs-storia__photo-wrap">
              <img src="/foto_gallu.jpg" alt="Interno Caffè Pellico" />
            </div>
          </div>
        </div>
      </section>

      <hr className="gold" style={{ maxWidth: 1200, margin: '0 auto' }} />

      {/* Valori */}
      <section className="cs-valori">
        <div className="section" style={{ textAlign: 'center' }}>
          <p className="section-label">I Nostri Pilastri</p>
          <h2 className="section-title" style={{ margin: '0 auto 1rem' }}>
            I valori che ci guidano
          </h2>
          <div className="gold-divider" style={{ maxWidth: 260, margin: '0 auto 3.5rem' }}>
            <span>✦</span>
          </div>
          <div className="cs-valori__grid">
            {[
              { icon: '♔', title: 'Qualità',      text: 'Selezioniamo ogni ingrediente con cura maniacale. Solo il meglio arriva nel tuo piatto.' },
              { icon: '♡', title: 'Passione',     text: 'Ogni caffè, ogni piatto è preparato con amore. La passione si sente al primo sorso.' },
              { icon: '◈', title: 'Tradizione',   text: 'Radici profonde nella cucina italiana, con occhio sempre attento alle tendenze contemporanee.' },
              { icon: '◉', title: 'Accoglienza',  text: 'Ogni ospite è un amico. L&rsquo;atmosfera di Caffè Pellico è calda, elegante e mai formale.' },
            ].map(v => (
              <div key={v.title} className="cs-valore-card">
                <span className="cs-valore-icon">{v.icon}</span>
                <h3 className="cs-valore-title">{v.title}</h3>
                <p className="cs-valore-text">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambient photo */}
      <section className="cs-ambient-photo">
        <img src="/foto_pianochiky.jpg" alt="Atmosfera Caffè Pellico" loading="lazy" />
      </section>

      {/* Team */}
      <section className="cs-team section">
        <p className="section-label" style={{ textAlign: 'center' }}>Le Persone</p>
        <h2 className="section-title" style={{ textAlign: 'center', margin: '0 auto 1rem' }}>
          Il Nostro Team
        </h2>
        <div className="gold-divider" style={{ maxWidth: 240, margin: '0 auto 3.5rem' }}>
          <span>✦</span>
        </div>
        <div className="cs-team__grid">
          {team.map(member => (
            <div key={member.name} className="cs-team__card">
              <div className="cs-team__avatar" aria-hidden="true">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="cs-team__name">{member.name}</h3>
              <p className="cs-team__role">{member.role}</p>
              <p className="cs-team__bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
