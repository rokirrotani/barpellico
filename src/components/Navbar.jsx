import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { to: '/',                  label: 'Home' },
  { to: '/chi-siamo',         label: 'Chi Siamo' },
  { to: '/menu-caffetteria',  label: 'Caff\u00e8' },
  { to: '/menu-bevande',      label: 'Bevande' },
  { to: '/menu-pranzi',       label: 'Pranzi' },
  { to: '/contatti',          label: 'Contatti' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [])

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={() => setOpen(false)}>
          <span className="navbar__logo-bp">CP</span>
          <span className="navbar__logo-text">Caffè Pellico</span>
        </Link>

        {/* Desktop Links */}
        <nav className="navbar__links" aria-label="Navigazione principale">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `navbar__link${isActive ? ' navbar__link--active' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Right: socials + CTA */}
        <div className="navbar__right">
          <div className="navbar__socials">
            <a href="https://www.instagram.com/caffe_pellico/" target="_blank" rel="noopener noreferrer" className="navbar__social-btn" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.9 4.9 0 0 1 1.772 1.153 4.9 4.9 0 0 1 1.153 1.772c.163.46.35 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.9 4.9 0 0 1-1.153 1.772 4.9 4.9 0 0 1-1.772 1.153c-.46.163-1.26.35-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.9 4.9 0 0 1-1.772-1.153A4.9 4.9 0 0 1 1.97 19.43c-.163-.46-.35-1.26-.403-2.43C1.509 15.734 1.5 15.354 1.5 12.15s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 4.898 1.94c.46-.163 1.26-.35 2.43-.403 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.059-2.148.261-2.913.558a7.06 7.06 0 0 0-2.554 1.664A7.06 7.06 0 0 0 .979 4.794c-.297.765-.499 1.636-.558 2.913C.363 8.987.35 9.395.35 12.653s.014 3.667.072 4.947c.059 1.277.261 2.148.558 2.913a7.06 7.06 0 0 0 1.664 2.554 7.06 7.06 0 0 0 2.554 1.664c.765.297 1.636.499 2.913.558 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.059 2.148-.261 2.913-.558a7.06 7.06 0 0 0 2.554-1.664 7.06 7.06 0 0 0 1.664-2.554c.297-.765.499-1.636.558-2.913.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.059-1.277-.261-2.148-.558-2.913a7.06 7.06 0 0 0-1.664-2.554A7.06 7.06 0 0 0 19.87.979c-.765-.297-1.636-.499-2.913-.558C15.677.363 15.269.35 12.01.35H12zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
            <a href="https://www.facebook.com/p/Caff%C3%A8-Pellico-100088418388482/" target="_blank" rel="noopener noreferrer" className="navbar__social-btn" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.885v2.27h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
            </a>
            <a href="https://wa.me/390175211012" target="_blank" rel="noopener noreferrer" className="navbar__social-btn navbar__social-btn--wa" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
            </a>
          </div>

          <Link to="/contatti" className="navbar__prenota-btn">Prenota</Link>
        </div>

        {/* Hamburger */}
        <button
          className={`navbar__burger${open ? ' navbar__burger--open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Apri menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile${open ? ' navbar__mobile--open' : ''}`}>
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `navbar__mobile-link${isActive ? ' navbar__mobile-link--active' : ''}`
            }
            onClick={() => setOpen(false)}
          >
            {label}
          </NavLink>
        ))}
        <Link to="/contatti" className="navbar__mobile-prenota" onClick={() => setOpen(false)}>
          Prenota un Tavolo
        </Link>
        <div className="navbar__mobile-socials">
          <a href="https://www.instagram.com/caffe_pellico/" target="_blank" rel="noopener noreferrer" className="navbar__mobile-social">Instagram</a>
          <a href="https://www.facebook.com/p/Caff%C3%A8-Pellico-100088418388482/" target="_blank" rel="noopener noreferrer" className="navbar__mobile-social">Facebook</a>
          <a href="https://wa.me/390175211012" target="_blank" rel="noopener noreferrer" className="navbar__mobile-social navbar__mobile-social--wa">WhatsApp</a>
        </div>
        <a href="tel:+390175211012" className="navbar__mobile-phone">&#x260E; 0175\u202f211012</a>
      </div>
    </header>
  )
}
