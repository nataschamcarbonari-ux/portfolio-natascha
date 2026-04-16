import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface NavProps {
  theme?: 'light' | 'dark';
}

const Nav: React.FC<NavProps> = ({ theme = 'light' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const themeClass = !scrolled && theme === 'dark' ? 'nav--dark' : '';

  const close = () => setMenuOpen(false);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : 'nav--normal'} ${themeClass}`}>
      <Link to="/" className="nav__logo" onClick={close}>NC</Link>

      <button
        className="nav__menu-btn"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <ul className={`nav__links${menuOpen ? ' nav__links--open' : ''}`}>
        <li><a href="/#projects" onClick={close}>Projects</a></li>
        <li><a href="/#about" onClick={close}>About</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
