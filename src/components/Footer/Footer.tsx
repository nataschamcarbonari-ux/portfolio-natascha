import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <span className="footer__copy">© 2025 Natascha Carbonari</span>
      <Link to="/" className="footer__logo">NC</Link>
      <span className="footer__role">Product Design · Strategy</span>
    </footer>
  );
};

export default Footer;