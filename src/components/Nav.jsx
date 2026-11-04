import { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { scrollToTarget } from '../lib/scrollController';
import './Nav.css';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, []);

  // Contact always resolves to the section at the end of Home — never a
  // separate page. Already there: smooth-scroll in place. Elsewhere:
  // navigate to "/#contact"; Home's own mount effect picks up the hash
  // and scrolls once its layout has settled.
  const goToContact = (closeMenu) => (e) => {
    e.preventDefault();
    if (closeMenu) setOpen(false);
    if (location.pathname === '/') {
      scrollToTarget('#contact', { offset: -40 });
    } else {
      navigate('/#contact');
    }
  };

  const contactActive = location.pathname === '/' && location.hash === '#contact';

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <NavLink to="/" className="nav__brand" aria-label="Aqsa Khan — home">
          <span className="nav__logo">
            <video src="/media/hero-loop.mp4" autoPlay muted loop playsInline aria-hidden="true" />
          </span>
          <span className="nav__brand-text mono">AQSA&nbsp;KHAN</span>
        </NavLink>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `nav__link mono${isActive && !contactActive ? ' is-active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
          <a href="/#contact" className={`nav__link mono${contactActive ? ' is-active' : ''}`} onClick={goToContact(false)}>
            Contact
          </a>
          <a
            href="/cv.pdf"
            className="btn nav__cv"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Download CV
          </a>
        </nav>

        <button
          className={`nav__toggle ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`nav__mobile ${open ? 'is-open' : ''}`}>
        {LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className="nav__mobile-link"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
        <a href="/#contact" className="nav__mobile-link" onClick={goToContact(true)}>
          Contact
        </a>
        <a
          href="/cv.pdf"
          className="nav__mobile-link"
          onClick={() => setOpen(false)}
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          Download CV
        </a>
      </div>
    </header>
  );
}
