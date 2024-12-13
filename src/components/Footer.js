import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Über MoveGreen */}
        <div className="footer__section">
          <h3>Über MoveGreen</h3>
          <p>MoveGreen – Nachhaltige Mobilität für die Schweiz.</p>
          <div className="footer__social">
            <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>

        {/* Navigation */}
        <div className="footer__section">
          <h3>Navigation</h3>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/karte">Karte</Link>
            <Link to="/explorer">Explorer</Link>
            <Link to="/community">Community</Link>
          </nav>
        </div>

        {/* Kontakt */}
        <div className="footer__section">
          <h3>Kontakt</h3>
          <ul className="footer__contact">
            <li>
              <FaEnvelope />
              <a href="mailto:info@movegreen.ch">info@movegreen.ch</a>
            </li>
            <li>
              <FaPhone />
              <span>+41 31 123 45 67</span>
            </li>
            <li>
              <FaMapMarkerAlt />
              <span>Bern, Schweiz</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer__section">
          <h3>Newsletter</h3>
          <form className="footer__newsletter" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Ihre E-Mail-Adresse" 
              aria-label="Newsletter E-Mail"
            />
            <button type="submit">Abonnieren</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer__bottom">
        <div className="footer__bottom-container">
          <div className="footer__legal">
            <Link to="/datenschutz">Datenschutz</Link>
            <Link to="/agb">AGB</Link>
            <Link to="/impressum">Impressum</Link>
          </div>
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} MoveGreen. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
