import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Nav.module.css';

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

  const close = () => setMenuOpen(false);

  return (
    <nav className={clsx(styles.nav, {
      [styles.scrolled]: scrolled,
      [styles.dark]: !scrolled && theme === 'dark',
    })}>
      <Link to="/" className={styles.logo} onClick={close}>NC</Link>

      <button
        className={styles.menuBtn}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <ul className={clsx(styles.links, { [styles.linksOpen]: menuOpen })}>
        <li><a href="/#projects" onClick={close}>Projects</a></li>
        <li><a href="/#about" onClick={close}>About</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
