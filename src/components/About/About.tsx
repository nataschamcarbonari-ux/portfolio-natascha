import React from 'react';

const skills = [
  { label: 'Research',    name: 'User Research'     },
  { label: 'Strategy',    name: 'Design Strategy'   },
  { label: 'Tools',       name: 'Figma & Figma Make'              },
  { label: 'Methods',     name: 'Design Thinking'    },
  { label: 'Frameworks',  name: 'Agile · Lean UX'   },
  { label: 'Education',   name: 'UFRGS · Dell Design Academy'      },
];

const About: React.FC = () => {
  return (
    <section id="about" className="about surface-dark">

      <div className="about__bio reveal">
        <p className="section-label">About</p>
        <h2 className="section-title">
          Designing<br />with intent
        </h2>
        <p className="about__body">
          I'm Natascha, a <em>Product Designer</em> currently interning at Dell
          Technologies' Client Innovation team — part of Dell's Austin, TX
          operation. I'm also an undergraduate Product Design student at{' '}
          <em>UFRGS</em>, with a background in Mechanical Engineering.
        </p>
        <p className="about__body">
          My goal is to become a <em>Design Strategist</em> — someone who bridges
          user research, systems thinking, and strategic design to create outcomes
          that matter. I work across the full product lifecycle: from initial
          research and synthesis to high-fidelity prototyping and usability
          validation, in Agile and Lean UX environments.
        </p>
        <p className="about__body">
          I'm an active member of the{' '}
          <em>Interaction Design Foundation (IxDF)</em> in Porto Alegre, where I
          engage with the local UX community to exchange ideas and stay current in
          the field. As a personal project, I'm collaborating with a developer to
          build an app that manages the tennis ranking system for a sports club in
          Brazil.
        </p>
        <div className="about__links">
          <a
            href="https://www.linkedin.com/in/natascha-maria-carbonari-069913121/"
            target="_blank"
            rel="noreferrer"
            className="about__link"
          >
            LinkedIn <span className="about__link-arrow">↗</span>
          </a>
          <a href="mailto:nataschamcarbonari@gmail.com" className="about__link">
            Email <span className="about__link-arrow">↗</span>
          </a>
        </div>
      </div>

      <div className="about__skills reveal">
        <p className="section-label">Skills &amp; Tools</p>
        <div className="about__skills-grid">
          {skills.map((s) => (
            <div key={s.label} className="about__skill-item">
              <p className="about__skill-label">{s.label}</p>
              <p className="about__skill-name">{s.name}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default About;