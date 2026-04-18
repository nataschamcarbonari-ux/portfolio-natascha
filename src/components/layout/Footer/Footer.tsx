import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <span className={styles.copy}>© 2025 Natascha Carbonari</span>
    <Link to="/" className={styles.logo}>NC</Link>
    <span className={styles.role}>Product Design · Strategy</span>
  </footer>
);

export default Footer;
