import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => (
  <section className={styles.hero}>
    <div className={`${styles.blob} ${styles.blob1}`} />
    <div className={`${styles.blob} ${styles.blob2}`} />
    <div className={`${styles.blob} ${styles.blob3}`} />

    <div className={styles.content}>
      <p className={styles.eyebrow}>Product Designer · Strategic Design</p>
      <div className={styles.nameWrapper}>
        <h1 className={styles.name}>
          Natascha<br />Carbonari
        </h1>
      </div>
      <p className={styles.desc}>
        Part of Dell's Client Innovation team (Austin/TX) · UFRGS student.
        Driving AI-first solutions by bridging business, users, and technology
        to create meaningful, sustainable products.
      </p>
    </div>
  </section>
);

export default Hero;
