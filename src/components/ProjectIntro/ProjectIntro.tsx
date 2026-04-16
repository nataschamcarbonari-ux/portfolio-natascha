import React from 'react';
import type { Project } from '../../types';

interface ProjectIntroProps {
  project: Project;
}

const ProjectIntro: React.FC<ProjectIntroProps> = ({ project }) => {
  return (
    <section id="project" className="project-intro">

      <div className="project-intro__text reveal">
        <p className="section-label">Project</p>
        <h2 className="gradient section-title">{project.title}</h2>
        <p className="section-body">{project.description}</p>
      </div>

      <div className="project-intro__meta reveal">
        <div className="meta-item">
          <p className="meta-item__label">Context</p>
          <p className="meta-item__value">{project.context}</p>
        </div>
        <div className="meta-item">
          <p className="meta-item__label">Role</p>
          <p className="meta-item__value">{project.role}</p>
        </div>
        <div className="meta-item">
          <p className="meta-item__label">Theme</p>
          <p className="meta-item__value">{project.theme}</p>
        </div>
        <div className="meta-item">
          <p className="meta-item__label">Steps</p>
          <p className="meta-item__value">{String(project.steps.length).padStart(2, '0')}</p>
        </div>
      </div>

    </section>
  );
};

export default ProjectIntro;
