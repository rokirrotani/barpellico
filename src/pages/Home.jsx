import { Link } from 'react-router-dom'
import './Home.css'

const featCards = [
  {
    photo: '/macchina_caffe.jpg',
    label: 'Caffetteria',
    title: 'Il Caffè Perfetto',
    desc: "Espresso, cappuccino e specialità preparate con i migliori chicchi selezionati.",
    to: '/menu-caffetteria',
  },
  {
    photo: '/foto_spritzGrande.jpg',
    label: 'Aperitivi & Cocktails',
    title: "Bevande d'Eccellenza",
    desc: "Cocktail classici, vini pregiati e aperitivi pensati per ogni momento della giornata.",
    to: '/menu-bevande',
  },
  {
    photo: '/foto_pranzi_tagliata.jpg',
    label: 'Pranzi',
    title: 'Cucina del Territorio',
    desc: 'Piatti del giorno con ingredienti freschi e ricette della tradizione piemontese.',
    to: '/menu-pranzi',
  },
]

const gallery = [
  '/foto_analcolici.jpg',
  '/foto_spritz.jpg',
  '/foto_antipasto.jpg',
  '/foto_piatto.jpg',
  '/foto_pianochiky.jpg',
  '/foto_bottigliera.jpg',
]

export default function Home() {
  return (
    <div className="home">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__photo" aria-hidden="true" />
        <div className="hero__overlay" aria-hidden="true" />
        <div className="hero__content">
          <span className="hero__eyebrow fade-up">Bar &amp; Caffetteria &middot; Saluzzo</span>
          <h1 className="hero__title fade-up fade-up-delay-1">Caffè Pellico</h1>
          <div className="hero__divider fade-up fade-up-delay-2" />
          <p className="hero__sub fade-up fade-up-delay-2">
            L&rsquo;eccellenza nel cuore di Saluzzo.&ensp;
            <em>Dal 20 Dicembre 2022.</em>
          </p>
          <div className="hero__cta fade-up fade-up-delay-4">
            <Link to="/menu-pranzi" className="btn-gold"><span>Scopri il Menù</span></Link>
            <Link to="/contatti"    className="btn-gold"><span>Prenota un Tavolo</span></Link>
          </div>
          <div className="hero__quick-links fade-up fade-up-delay-4">
            <Link to="/menu-pranzi"      className="btn-ghost"><span>Scopri il Menù</span></Link>
            <Link to="/menu-bevande"     className="btn-ghost"><span>Bevande</span></Link>
            <Link to="/menu-caffetteria" className="btn-ghost"><span>Caffè</span></Link>
            <Link to="/contatti"         className="btn-gold"><span>Prenota un Tavolo</span></Link>
          </div>
        </div>
        <a href="#welcome" className="hero__scroll-hint" aria-label="Scorri in basso">
          <span className="hero__scroll-line" />
        </a>
      </section>

      {/* ── WELCOME STRIP ── */}
      <section id="welcome" className="welcome-strip">
        <div className="welcome-strip__inner">
          <p className="section-label">Benvenuti al Caffè Pellico</p>
          <h2 className="section-title">Un luogo dove il tempo si ferma</h2>
          <div className="gold-divider" style={{ maxWidth: 280, margin: '0 auto 2rem' }}>
            <span>✦</span>
          </div>
          <p className="welcome-strip__text">
            Nel cuore di Saluzzo, un rifugio di gusto e convivialità. Il profumo del caffè
            appena estratto, un pranzo che racconta il territorio, un aperitivo per celebrare
            ogni momento della giornata.
          </p>
        </div>
      </section>

      {/* ── FEATURE CARDS ── */}
      <section className="home-feat">
        <div className="home-feat__grid">
          {featCards.map(({ photo, label, title, desc, to }) => (
            <Link key={to} to={to} className="feat-card">
              <div className="feat-card__photo">
                <img src={photo} alt={title} loading="lazy" />
              </div>
              <div className="feat-card__body">
                <span className="feat-card__label">{label}</span>
                <h3 className="feat-card__title">{title}</h3>
                <p className="feat-card__desc">{desc}</p>
                <span className="feat-card__cta">Scopri →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="about-home">
        <div className="about-home__inner section">
          <div className="about-home__text">
            <p className="section-label">La Nostra Storia</p>
            <h2 className="section-title">
              Qualità artigianale,<br />
              <em>ogni giorno dal 2022</em>
            </h2>
            <div className="gold-divider" style={{ maxWidth: 200 }}>
              <span>✦</span>
            </div>
            <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
              Caffè Pellico nasce dalla passione per la qualità e dal rispetto per la tradizione.
              Ogni mattina prepariamo il caffè con cura, selezioniamo ingredienti freschi
              e accogliamo i nostri ospiti come di casa.
            </p>
            <Link to="/chi-siamo" className="btn-gold"><span>Chi Siamo</span></Link>
          </div>
          <div className="about-home__photo">
            <img src="/fotopiano_sopra.jpg" alt="Interno Caffè Pellico" />
          </div>
        </div>
      </section>

      {/* ── GALLERY CAROUSEL ── */}
      <section className="gallery-strip">
        <div className="gallery-carousel__track-wrap">
          <div className="gallery-carousel__track">
            {[...gallery, ...gallery].map((src, i) => (
              <div key={i} className="gallery-carousel__item">
                <img src={src} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
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
