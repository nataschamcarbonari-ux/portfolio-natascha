import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import type { Project } from '../../../types';
import styles from './ProjectCard.module.css';

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
        className={clsx(styles.card, styles.featured)}
        style={bgStyle}
      >
        <div className={styles.inner}>
          <p className={styles.context}>{project.context}</p>
          <h2 className={styles.title}>{project.title}</h2>
          <p className={styles.desc}>{project.description}</p>
          <span className={styles.cta}>View Project →</span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/project/${project.slug}`}
      className={clsx(styles.card, styles.standard)}
      style={bgStyle}
    >
      <div className={styles.inner}>
        <p className={styles.context}>{project.context}</p>
        <h3 className={styles.titleSm}>{project.title}</h3>
        <span className={styles.arrow}>→</span>
      </div>
    </Link>
  );
};

export default ProjectCard;
