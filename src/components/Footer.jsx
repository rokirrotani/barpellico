import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">

        {/* Brand */}
        <div className="footer__brand">
          <span className="footer__logo">Caffè Pellico</span>
          <p className="footer__tagline">
            Dal 20 Dicembre 2022
          </p>
          <a
            href="https://www.instagram.com/caffe_pellico/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__instagram"
            aria-label="Seguici su Instagram"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.9 4.9 0 0 1 1.772 1.153 4.9 4.9 0 0 1 1.153 1.772c.163.46.35 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.9 4.9 0 0 1-1.153 1.772 4.9 4.9 0 0 1-1.772 1.153c-.46.163-1.26.35-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.9 4.9 0 0 1-1.772-1.153A4.9 4.9 0 0 1 1.97 19.43c-.163-.46-.35-1.26-.403-2.43C1.509 15.734 1.5 15.354 1.5 12.15s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 4.898 1.94c.46-.163 1.26-.35 2.43-.403 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.059-2.148.261-2.913.558a7.06 7.06 0 0 0-2.554 1.664A7.06 7.06 0 0 0 .979 4.794c-.297.765-.499 1.636-.558 2.913C.363 8.987.35 9.395.35 12.653s.014 3.667.072 4.947c.059 1.277.261 2.148.558 2.913a7.06 7.06 0 0 0 1.664 2.554 7.06 7.06 0 0 0 2.554 1.664c.765.297 1.636.499 2.913.558 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.059 2.148-.261 2.913-.558a7.06 7.06 0 0 0 2.554-1.664 7.06 7.06 0 0 0 1.664-2.554c.297-.765.499-1.636.558-2.913.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.059-1.277-.261-2.148-.558-2.913a7.06 7.06 0 0 0-1.664-2.554A7.06 7.06 0 0 0 19.87.979c-.765-.297-1.636-.499-2.913-.558C15.677.363 15.269.35 12.01.35H12zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
            </svg>
            @caffe_pellico
          </a>
        </div>

        {/* Quick Links */}
        <nav className="footer__nav" aria-label="Footer navigation">
          <h4 className="footer__nav-title">Menu</h4>
          <Link to="/menu-caffetteria">Caffetteria</Link>
          <Link to="/menu-bevande">Bevande</Link>
          <Link to="/menu-pranzi">Pranzi</Link>
        </nav>

        {/* Info */}
        <div className="footer__info">
          <h4 className="footer__nav-title">Dove Siamo</h4>
          <a
            href="https://www.google.com/maps/place/Caffe'+Pellico/@44.6457269,7.4878673,773m/data=!3m2!1e3!4b1!4m6!3m5!1s0x12cd4903139ae247:0x315828f8eb6ca9e!8m2!3d44.6457231!4d7.4904422!16s%2Fg%2F12hl55my5"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__maps-link"
          >
            Corso Italia, 75<br />12037 Saluzzo (CN)
          </a>
          <p className="footer__tel">
            <a href="tel:+390175211012">+39 0175 211012</a>
          </p>
          <div className="footer__social-row">
            <a href="https://www.instagram.com/caffe_pellico/" target="_blank" rel="noopener noreferrer" className="footer__social-pill">Instagram</a>
            <a href="https://www.facebook.com/p/Caff%C3%A8-Pellico-100088418388482/" target="_blank" rel="noopener noreferrer" className="footer__social-pill">Facebook</a>
            <a href="https://wa.me/390175211012" target="_blank" rel="noopener noreferrer" className="footer__social-pill footer__social-pill--wa">WhatsApp</a>
          </div>
        </div>

        {/* Hours */}
        <div className="footer__hours">
          <h4 className="footer__nav-title">Orari</h4>
          <p>Lun: 07:00 – 21:00</p>
          <p>Mar: Chiuso</p>
          <p>Mer – Gio: 07:00 – 21:00</p>
          <p>Ven – Sab: 07:00 – 00:00</p>
          <p>Dom: 08:00 – 21:00</p>
        </div>

      </div>

      <div className="footer__bottom">
        <div className="gold-divider" style={{ margin: '0 auto 1.5rem', maxWidth: '1200px' }}>
          <span>✦</span>
        </div>
        <p>© {year} Caff\u00e8 Pellico — Tutti i diritti riservati</p>
      </div>
    </footer>
  )
}
