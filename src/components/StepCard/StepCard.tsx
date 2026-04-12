import React from 'react';
import { Link } from 'react-router-dom';
import Tag from '../ui/Tag/Tag';
import type { Step } from '../../types';

interface StepCardProps {
  step: Step;
}

const StepCard: React.FC<StepCardProps> = ({ step }) => {
  return (
    <div className="step-row">

      <div className="step-row__connector">
        <span className="step-row__num">
          {String(step.id).padStart(2, '0')}
        </span>
        <span className="step-row__line" />
      </div>

      <Link
        to={`/step/${step.id}`}
        className="step-card reveal"
      >
        <div className="step-card__left">
          <h3 className="step-card__title">{step.title}</h3>
          <div className="step-card__tags">
            {step.tags.map((tag) => (
              <Tag key={tag} label={tag} variant="dark" />
            ))}
          </div>
        </div>
        <span className="step-card__arrow">→</span>
      </Link>

    </div>
  );
};

export default StepCard;