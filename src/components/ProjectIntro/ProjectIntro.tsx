import React from 'react';

const ProjectIntro: React.FC = () => {
  return (
    <section id="project" className="project-intro">

      <div className="project-intro__text reveal">
        <p className="section-label">Featured Project</p>
        <h2 className="section-title">
          Futures —<br />Personal Productivity
        </h2>
        <p className="section-body">
          A strategic design project developed at Dell Technologies exploring
          how hybrid and remote workers can better manage focus and
          productivity. The project follows a structured 7-step design process
          from theme definition through concept development.
        </p>
      </div>

      <div className="project-intro__meta reveal">
        <div className="meta-item">
          <p className="meta-item__label">Context</p>
          <p className="meta-item__value">Dell Technologies</p>
        </div>
        <div className="meta-item">
          <p className="meta-item__label">Role</p>
          <p className="meta-item__value">Design Strategy Intern</p>
        </div>
        <div className="meta-item">
          <p className="meta-item__label">Theme</p>
          <p className="meta-item__value">Personal Productivity</p>
        </div>
        <div className="meta-item">
          <p className="meta-item__label">Steps</p>
          <p className="meta-item__value">07</p>
        </div>
      </div>

    </section>
  );
};

export default ProjectIntro;