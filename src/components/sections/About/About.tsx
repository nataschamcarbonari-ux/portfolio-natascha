import React from 'react';
import styles from './About.module.css';
import { skills } from '../../../data/skills';

const About: React.FC = () => (
  <section id="about" className={`${styles.about} surface-dark`}>

    <div className="reveal">
      <p className="section-label">About</p>
      <h2 className="section-title">
        Designing<br />with intent
      </h2>
      <p className={styles.body}>
        I'm Natascha, a <em>Product Designer</em> currently interning at Dell
        Technologies' Client Innovation team — part of Dell's Austin, TX
        operation. I'm also an undergraduate Product Design student at{' '}
        <em>UFRGS</em>, with a background in Mechanical Engineering.
      </p>
      <p className={styles.body}>
        My goal is to become a <em>Design Strategist</em> — someone who bridges
        user research, systems thinking, and strategic design to create outcomes
        that matter. I work across the full product lifecycle: from initial
        research and synthesis to high-fidelity prototyping and usability
        validation, in Agile and Lean UX environments.
      </p>
      <p className={styles.body}>
        I'm an active member of the{' '}
        <em>Interaction Design Foundation (IxDF)</em> in Porto Alegre, where I
        engage with the local UX community to exchange ideas and stay current in
        the field. As a personal project, I'm collaborating with a developer to
        build an app that manages the tennis ranking system for a sports club in
        Brazil.
      </p>
      <div className={styles.links}>
        <a
          href="https://www.linkedin.com/in/natascha-maria-carbonari-069913121/"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          LinkedIn <span className={styles.linkArrow}>↗</span>
        </a>
        <a href="mailto:nataschamcarbonari@gmail.com" className={styles.link}>
          Email <span className={styles.linkArrow}>↗</span>
        </a>
      </div>
    </div>

    <div className="reveal">
      <p className="section-label">Skills &amp; Tools</p>
      <div className={styles.skillsGrid}>
        {skills.map((s) => (
          <div key={s.label} className={styles.skillItem}>
            <p className={styles.skillLabel}>{s.label}</p>
            <p className={styles.skillName}>{s.name}</p>
          </div>
        ))}
      </div>
    </div>

  </section>
);

export default About;
