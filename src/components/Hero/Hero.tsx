import React from 'react';
import '../../styles/styles.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      {/* Three blobs matching the presentation cover — soft blue/lilac cluster on the right */}
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />
      <div className="hero__blob hero__blob--3" />

      <div className="hero__content">
        <p className="hero__eyebrow">Product Designer · Strategic Design </p>
        <h1 className="gradient hero__name">
          Natascha<br />Carbonari
        </h1>
        <p className="hero__desc">
          Part of Dell's Client Innovation team (Austin/TX) · UFRGS student.
Driving AI-first solutions by bridging business, users, and technology
          to create meaningful, sustainable products.
        </p>
      </div>
    </section>
  );
};

export default Hero;