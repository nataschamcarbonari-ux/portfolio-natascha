import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import type { Step } from '../../../types';
import styles from './StepNav.module.css';

interface StepNavProps {
  prev: Step | undefined;
  next: Step | undefined;
  currentId: number;
  projectSlug: string;
  totalSteps: number;
  top?: boolean;
}

const StepNav: React.FC<StepNavProps> = ({ prev, next, currentId, projectSlug, totalSteps, top }) => (
  <nav className={clsx(styles.nav, { [styles.top]: top })}>

    <div className={clsx(styles.side)}>
      {prev ? (
        <Link to={`/project/${projectSlug}/step/${prev.id}`} className={styles.link}>
          <span className={styles.label}>← Previous</span>
          <span className={styles.title}>
            {String(prev.id).padStart(2, '0')} — {prev.title}
          </span>
        </Link>
      ) : (
        <Link to={`/project/${projectSlug}`} className={styles.link}>
          <span className={styles.label}>← Back</span>
          <span className={styles.title}>Project Overview</span>
        </Link>
      )}
    </div>

    <div className={styles.dots}>
      {Array.from({ length: totalSteps }, (_, i) => {
        const stepId = i + 1;
        return (
          <Link
            key={stepId}
            to={`/project/${projectSlug}/step/${stepId}`}
            className={clsx(styles.dot, { [styles.dotActive]: stepId === currentId })}
            title={`Step ${String(stepId).padStart(2, '0')}`}
          >
            {String(stepId).padStart(2, '0')}
          </Link>
        );
      })}
    </div>

    <div className={clsx(styles.side, styles.sideRight)}>
      {next ? (
        <Link to={`/project/${projectSlug}/step/${next.id}`} className={clsx(styles.link, styles.linkRight)}>
          <span className={styles.label}>Next →</span>
          <span className={styles.title}>
            {String(next.id).padStart(2, '0')} — {next.title}
          </span>
        </Link>
      ) : (
        <Link to={`/project/${projectSlug}`} className={clsx(styles.link, styles.linkRight)}>
          <span className={styles.label}>↗</span>
          <span className={styles.title}>Back to Project</span>
        </Link>
      )}
    </div>

  </nav>
);

export default StepNav;
