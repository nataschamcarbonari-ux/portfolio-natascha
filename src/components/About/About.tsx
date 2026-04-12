import React from 'react';

const skills = [
  { label: 'Research',   name: 'User Research'    },
  { label: 'Strategy',   name: 'Design Strategy'  },
  { label: 'Tools',      name: 'Figma'             },
  { label: 'Methods',    name: 'HCD Process'       },
  { label: 'Frameworks', name: 'Systems Thinking'  },
  { label: 'Education',  name: 'UFRGS'             },
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
          I'm Natascha, a Product Design intern at Dell Technologies and
          undergraduate student at UFRGS. My goal is to become a Design
          Strategist — someone who bridges research, systems thinking, and
          design to create meaningful outcomes. I care about understanding
          <em> why</em> before deciding <em>what</em>.
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
          <a href="mailto:natascha@email.com" className="about__link">
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