import React from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  variant?: 'featured' | 'default';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, variant = 'default' }) => {
  const bgStyle = project.coverImage
    ? { backgroundImage: `url(${project.coverImage})` }
    : {};

  if (variant === 'featured') {
    return (
      <Link
        to={`/project/${project.slug}`}
        className="project-card project-card--featured"
        style={bgStyle}
      >
        <div className="project-card__inner">
          <p className="project-card__context">{project.context}</p>
          <h2 className="project-card__title">{project.title}</h2>
          <p className="project-card__desc">{project.description}</p>
          <span className="project-card__cta">View Project →</span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/project/${project.slug}`}
      className="project-card project-card--default"
      style={bgStyle}
    >
      <div className="project-card__inner">
        <p className="project-card__context">{project.context}</p>
        <h3 className="project-card__title-sm">{project.title}</h3>
        <span className="project-card__arrow">→</span>
      </div>
    </Link>
  );
};

export default ProjectCard;
