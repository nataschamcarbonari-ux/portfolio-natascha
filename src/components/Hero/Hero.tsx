import React from 'react';
import "../../styles/styles.css";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      {/* Three blobs matching the presentation cover — soft blue/lilac cluster on the right */}
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />
      <div className="hero__blob hero__blob--3" />

      <div className="hero__content">
        <p className="hero__eyebrow">Design Strategist · Product Design</p>
        <h1 className="gradient hero__name">
          Natascha<br />Carbonari
        </h1>
        <p className="hero__desc">
          Intern at Dell Technologies · UFRGS student.<br />
          Bridging research, systems thinking, and design
          to create meaningful outcomes.
        </p>
        <a href="#process" className="hero__cta">
          Explore the project →
        </a>
      </div>

      <div className="hero__scroll">
        <span className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;