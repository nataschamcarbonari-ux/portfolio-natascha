import React from 'react';
import type { Project } from '../../../types';
import styles from './ProjectIntro.module.css';

interface ProjectIntroProps {
  project: Project;
}

const ProjectIntro: React.FC<ProjectIntroProps> = ({ project }) => (
  <section id="project" className={styles.intro}>

    <div className={`${styles.text} reveal`}>
      <p className="section-label">Project</p>
      <h2 className="section-title">{project.title}</h2>
      <p className="section-body">{project.description}</p>
    </div>

    <div className={`${styles.meta} reveal`}>
      <div className={styles.metaItem}>
        <p className={styles.metaLabel}>Context</p>
        <p className={styles.metaValue}>{project.context}</p>
      </div>
      <div className={styles.metaItem}>
        <p className={styles.metaLabel}>Role</p>
        <p className={styles.metaValue}>{project.role}</p>
      </div>
      <div className={styles.metaItem}>
        <p className={styles.metaLabel}>Theme</p>
        <p className={styles.metaValue}>{project.theme}</p>
      </div>
      <div className={styles.metaItem}>
        <p className={styles.metaLabel}>Steps</p>
        <p className={styles.metaValue}>{String(project.steps.length).padStart(2, '0')}</p>
      </div>
    </div>

  </section>
);

export default ProjectIntro;
