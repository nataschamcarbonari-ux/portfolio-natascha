import React from 'react';
import { Link } from 'react-router-dom';
import type { Step } from '../../types';

interface StepNavProps {
  prev: Step | undefined;
  next: Step | undefined;
  currentId: number;
}

const StepNav: React.FC<StepNavProps> = ({ prev, next, currentId }) => {
  return (
    <nav className="step-nav">

      <div className="step-nav__side step-nav__side--left">
        {prev ? (
          <Link to={`/step/${prev.id}`} className="step-nav__link">
            <span className="step-nav__label">← Previous</span>
            <span className="step-nav__title">
              {String(prev.id).padStart(2, '0')} — {prev.title}
            </span>
          </Link>
        ) : (
          <Link to="/" className="step-nav__link">
            <span className="step-nav__label">← Back</span>
            <span className="step-nav__title">Portfolio</span>
          </Link>
        )}
      </div>

      <div className="step-nav__dots">
        {Array.from({ length: 7 }, (_, i) => {
          const stepId = i + 1;
          return (
            <Link
              key={stepId}
              to={`/step/${stepId}`}
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
          <Link to={`/step/${next.id}`} className="step-nav__link step-nav__link--right">
            <span className="step-nav__label">Next →</span>
            <span className="step-nav__title">
              {String(next.id).padStart(2, '0')} — {next.title}
            </span>
          </Link>
        ) : (
          <Link to="/" className="step-nav__link step-nav__link--right">
            <span className="step-nav__label">↗</span>
            <span className="step-nav__title">Back to Portfolio</span>
          </Link>
        )}
      </div>

    </nav>
  );
};

export default StepNav;