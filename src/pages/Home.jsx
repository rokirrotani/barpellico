import { Link } from 'react-router-dom'
import './Home.css'

const highlights = [
  {
    icon: '☕',
    title: 'Caffetteria',
    desc: 'Espresso, cappuccino e specialità preparate con i migliori chicchi selezionati.',
    to: '/menu-caffetteria',
  },
  {
    icon: '🍷',
    title: 'Bevande',
    desc: 'Cocktail classici, vini d\'eccellenza e aperitivi pensati per ogni momento.',
    to: '/menu-bevande',
  },
  {
    icon: '🍽️',
    title: 'Pranzi',
    desc: 'Piatti del giorno realizzati con ingredienti freschi e ricette della tradizione.',
    to: '/menu-pranzi',
  },
]

const values = [
  { num: '2022',  label: 'Anno di apertura' },
  { num: '200+',  label: 'Clienti al giorno' },
  { num: '100%',  label: 'Ingredienti freschi' },
  { num: '★ 5',   label: 'Valutazione media' },
]

export default function Home() {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero__bg" aria-hidden="true" />
        <div className="hero__overlay" aria-hidden="true" />
        <div className="hero__content">
          <span className="hero__eyebrow fade-up">Bar &amp; Caffetteria &middot; Saluzzo</span>
          <h1 className="hero__title fade-up fade-up-delay-1">Caffè<br />Pellico</h1>
          <div className="hero__line fade-up fade-up-delay-2" />
          <p className="hero__sub fade-up fade-up-delay-2">
            L&rsquo;eccellenza nel cuore di Saluzzo.<br />
            <em>Dal 20 Dicembre 2022.</em>
          </p>
          <div className="hero__cta fade-up fade-up-delay-4">
            <Link to="/menu-pranzi" className="btn-gold"><span>Scopri il Menù</span></Link>
            <Link to="/contatti"    className="btn-ghost"><span>Prenota</span></Link>
          </div>
        </div>
        <a href="#highlights" className="hero__scroll-hint" aria-label="Scorri in basso">
          <span className="hero__scroll-line" />
        </a>
      </section>

      {/* HIGHLIGHTS */}
      <section id="highlights" className="home-highlights">
        <div className="section">
          <p className="section-label" style={{ textAlign: 'center' }}>La Nostra Offerta</p>
          <h2 className="section-title" style={{ textAlign: 'center', margin: '0 auto 1rem' }}>
            Un&rsquo;esperienza per ogni momento
          </h2>
          <div className="gold-divider" style={{ maxWidth: 300, margin: '0 auto 3.5rem' }}>
            <span>✦</span>
          </div>
          <div className="highlights-grid">
            {highlights.map(({ icon, title, desc, to }) => (
              <Link key={to} to={to} className="highlight-card">
                <div className="highlight-card__icon">{icon}</div>
                <h3 className="highlight-card__title">{title}</h3>
                <p className="highlight-card__desc">{desc}</p>
                <span className="highlight-card__arrow">Scopri →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="about-strip">
        <div className="about-strip__inner section">
          <div className="about-strip__text">
            <p className="section-label">La Nostra Storia</p>
            <h2 className="section-title">
              Qualità artigianale,<br />
              <em>ogni giorno dal 2022</em>
            </h2>
            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
              Caffè Pellico nasce dalla passione per la qualità e dal rispetto per la tradizione.
              Ogni mattina prepariamo il caffè con cura, selezioniamo ingredienti freschi
              e accogliamo i nostri ospiti come di casa.
            </p>
            <Link to="/chi-siamo" className="btn-gold"><span>La Nostra Storia</span></Link>
          </div>
          <div className="about-strip__visual" aria-hidden="true">
            <div className="about-strip__frame">
              <div className="about-strip__frame-inner">
                <span>Caffè<br/>Pellico</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="stats-grid section" style={{ padding: '4rem 2rem' }}>
          {values.map(({ num, label }) => (
            <div key={label} className="stat-item">
              <span className="stat-num">{num}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="cta-banner__inner">
          <p className="section-label" style={{ textAlign: 'center' }}>Vieni a Trovarci</p>
          <h2 className="cta-banner__title">Prenota il tuo tavolo</h2>
          <p className="cta-banner__sub">
            Riservato a chi ama vivere ogni pausa con gusto
          </p>
          <Link to="/contatti" className="btn-gold" style={{ marginTop: '2rem' }}>
            <span>Contattaci ora</span>
          </Link>
        </div>
      </section>

    </div>
  )
}
