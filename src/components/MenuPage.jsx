import { useEffect, useRef } from 'react'
import './MenuPage.css'

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    el.querySelectorAll('.reveal').forEach(item => observer.observe(item))
    return () => observer.disconnect()
  }, [])
  return ref
}

function slug(str) {
  return str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

export default function MenuPage({ label, title, subtitle, categories }) {
  const bodyRef = useReveal()

  return (
    <div className="menu-page">

      {/* ── Hero ── */}
      <section className="menu-hero">
        <div className="menu-hero__particles" aria-hidden="true">
          {[...Array(6)].map((_, i) => (
            <span key={i} className={`mhp mhp-${i + 1}`} />
          ))}
        </div>
        <div className="menu-hero__content">
          <p className="section-label fade-up">{label}</p>
          <h1 className="menu-hero__title fade-up fade-up-delay-1">{title}</h1>
          <p className="menu-hero__subtitle fade-up fade-up-delay-2">{subtitle}</p>
          <div className="menu-hero__line fade-up fade-up-delay-3" aria-hidden="true" />
        </div>
      </section>

      {/* ── Sticky category nav ── */}
      <nav className="menu-cat-nav" aria-label="Categorie">
        <div className="menu-cat-nav__inner">
          {categories.map(cat => (
            <a
              key={cat.name}
              href={`#${slug(cat.name)}`}
              className="menu-cat-nav__link"
            >
              {cat.name}
            </a>
          ))}
        </div>
      </nav>

      {/* ── Categories ── */}
      <div className="menu-body" ref={bodyRef}>
        {categories.map((cat, ci) => (
          <section
            key={cat.name}
            className="menu-category"
          >
            <div className="menu-cat-header reveal">
              <span className="menu-cat-number">{String(ci + 1).padStart(2, '0')}</span>
              <div className="menu-cat-title-wrap">
                <h2 className="menu-cat-title" id={slug(cat.name)}>{cat.name}</h2>
              </div>
              {cat.note && <p className="menu-cat-note">{cat.note}</p>}
            </div>

            {cat.photo && (
              <div className="menu-cat-photo reveal" style={{'--delay': '0.05s'}}>
                <img
                  src={cat.photo}
                  alt={cat.name}
                  loading="lazy"
                  style={cat.photoPosition ? { objectPosition: cat.photoPosition } : undefined}
                />
              </div>
            )}

            <div className={`menu-items-list${cat.cols === 2 ? ' menu-items-list--two-col' : ''}`}>
              {cat.items.map((item, ii) => (
                <div
                  key={item.name + ii}
                  className={`menu-item reveal${item.prestige ? ' menu-item--prestige' : ''}`}
                  style={{ '--delay': `${ii * 0.055}s` }}
                >
                  <div className="menu-item__main">
                    <span className="menu-item__name">{item.name}</span>
                    {item.producer && (
                      <span className="menu-item__producer">{item.producer}</span>
                    )}
                    {item.desc && (
                      <span className="menu-item__desc">{item.desc}</span>
                    )}
                  </div>
                  <span className="menu-item__dots" aria-hidden="true" />
                  <span className="menu-item__price">{item.price}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

    </div>
  )
}
