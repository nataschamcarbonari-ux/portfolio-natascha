import React from 'react';
import { Link } from 'react-router-dom';
import Tag from '../../ui/Tag/Tag';
import type { Step } from '../../../types';
import styles from './StepHero.module.css';

interface StepHeroProps {
  step: Step;
  total: number;
  projectSlug: string;
  projectTitle: string;
}

const StepHero: React.FC<StepHeroProps> = ({ step, total, projectSlug, projectTitle }) => (
  <section className={styles.hero}>
    <div className={styles.blob} />

    <p className={styles.eyebrow}>
      Step {String(step.id).padStart(2, '0')} of {String(total).padStart(2, '0')}
    </p>

    <h1 className={styles.title}>{step.title}</h1>
    <p className={styles.subtitle}>{step.subtitle}</p>

    <div className={styles.tags}>
      {step.tags.map((tag) => (
        <Tag key={tag} label={tag} variant="default" />
      ))}
    </div>

    <div className={styles.meta}>
      <div className={styles.metaItem}>
        <p className={styles.metaLabel}>Step</p>
        <p className={styles.metaValue}>
          {String(step.id).padStart(2, '0')} of {String(total).padStart(2, '0')}
        </p>
      </div>
      <div className={styles.metaItem}>
        <p className={styles.metaLabel}>Project</p>
        <p className={styles.metaValue}>
          <Link to={`/project/${projectSlug}`} className={styles.projectLink}>
            {projectTitle}
          </Link>
        </p>
      </div>
    </div>
  </section>
);

export default StepHero;
