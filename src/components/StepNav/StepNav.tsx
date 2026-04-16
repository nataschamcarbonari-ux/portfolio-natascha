import React from 'react';
import { Link } from 'react-router-dom';
import type { Step } from '../../types';

interface StepNavProps {
  prev: Step | undefined;
  next: Step | undefined;
  currentId: number;
  projectSlug: string;
  totalSteps: number;
  top?: boolean;
}

const StepNav: React.FC<StepNavProps> = ({ prev, next, currentId, projectSlug, totalSteps, top }) => {
  return (
    <nav className={`step-nav${top ? ' step-nav--top' : ''}`}>

      <div className="step-nav__side step-nav__side--left">
        {prev ? (
          <Link to={`/project/${projectSlug}/step/${prev.id}`} className="step-nav__link">
            <span className="step-nav__label">← Previous</span>
            <span className="step-nav__title">
              {String(prev.id).padStart(2, '0')} — {prev.title}
            </span>
          </Link>
        ) : (
          <Link to={`/project/${projectSlug}`} className="step-nav__link">
            <span className="step-nav__label">← Back</span>
            <span className="step-nav__title">Project Overview</span>
          </Link>
        )}
      </div>

      <div className="step-nav__dots">
        {Array.from({ length: totalSteps }, (_, i) => {
          const stepId = i + 1;
          return (
            <Link
              key={stepId}
              to={`/project/${projectSlug}/step/${stepId}`}
              className={`step-nav__dot ${stepId === currentId ? 'step-nav__dot--active' : ''}`}
              title={`Step ${String(stepId).padStart(2, '0')}`}
            >
              {String(stepId).padStart(2, '0')}
            </Link>
          );
        })}
      </div>

      <div className="step-nav__side step-nav__side--right">
        {next ? (
          <Link to={`/project/${projectSlug}/step/${next.id}`} className="step-nav__link step-nav__link--right">
            <span className="step-nav__label">Next →</span>
            <span className="step-nav__title">
              {String(next.id).padStart(2, '0')} — {next.title}
            </span>
          </Link>
        ) : (
          <Link to={`/project/${projectSlug}`} className="step-nav__link step-nav__link--right">
            <span className="step-nav__label">↗</span>
            <span className="step-nav__title">Back to Project</span>
          </Link>
        )}
      </div>

    </nav>
  );
};

export default StepNav;
