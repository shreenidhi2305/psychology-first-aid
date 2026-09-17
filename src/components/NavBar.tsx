import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Icon } from './Icon';
import './NavBar.css';

const PAGES = [
  { to: '/', label: 'Home' },
  { to: '/survey-findings', label: 'Survey Findings' },
  { to: '/resources', label: 'Resources' },
  { to: '/support', label: 'Support Directory' },
  { to: '/about', label: 'About' },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} aria-label="Primary">
        <Link className="nav-brand h3" to="/">
          <span className="nav-mark">
            <Icon name="heart" />
          </span>
          Haven
        </Link>

        <ul className="nav-links">
          {PAGES.map((p) => (
            <li key={p.to}>
              <NavLink
                className={({ isActive }) => `nav-link label${isActive ? ' active' : ''}`}
                to={p.to}
                end={p.to === '/'}
              >
                {p.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="nav-menu-btn label"
          aria-expanded={menuOpen}
          aria-controls="nav-mobile-panel"
          onClick={() => setMenuOpen(true)}
        >
          <Icon name="menu" />
          Menu
        </button>

        <NavLink className="nav-crisis label" to="/emergency">
          <Icon name="phone" />
          Need help now?
        </NavLink>
      </nav>

      {menuOpen ? (
        <>
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
          <div className="nav-backdrop" onClick={() => setMenuOpen(false)} />
          <div id="nav-mobile-panel" className="nav-mobile-panel" role="dialog" aria-modal="true" aria-label="Site menu">
            <div className="nav-mobile-header">
              <span className="h3">Menu</span>
              <button
                type="button"
                className="nav-mobile-close"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <Icon name="close" />
              </button>
            </div>
            <ul className="nav-mobile-links">
              {PAGES.map((p) => (
                <li key={p.to}>
                  <NavLink
                    className={({ isActive }) => `nav-link label${isActive ? ' active' : ''}`}
                    to={p.to}
                    end={p.to === '/'}
                    onClick={() => setMenuOpen(false)}
                  >
                    {p.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : null}
    </>
  );
}
