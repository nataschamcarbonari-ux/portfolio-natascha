import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <Link to="/" className="nav__logo">NC</Link>
      <ul className="nav__links">
        <li><a href="#project">Project</a></li>
        <li><a href="#process">Process</a></li>
        <li><a href="#outcomes">Outcomes</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
};

export default Nav;