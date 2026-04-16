import React from 'react';
import { Link } from 'react-router-dom';
import Tag from '../ui/Tag/Tag';
import type { Step } from '../../types';

interface StepHeroProps {
  step: Step;
  total: number;
  projectSlug: string;
  projectTitle: string;
}

const StepHero: React.FC<StepHeroProps> = ({ step, total, projectSlug, projectTitle }) => {
  return (
    <section className="step-hero">
      <div className="step-hero__blob" />

      <p className="step-hero__eyebrow">
        Step {String(step.id).padStart(2, '0')} of {String(total).padStart(2, '0')}
      </p>

      <h1 className="step-hero__title">{step.title}</h1>

      <p className="step-hero__subtitle">{step.subtitle}</p>

      <div className="step-hero__tags">
        {step.tags.map((tag) => (
          <Tag key={tag} label={tag} variant="default" />
        ))}
      </div>

      <div className="step-hero__meta">
        <div className="step-hero__meta-item">
          <p className="step-hero__meta-label">Step</p>
          <p className="step-hero__meta-value">
            {String(step.id).padStart(2, '0')} of {String(total).padStart(2, '0')}
          </p>
        </div>
        <div className="step-hero__meta-item">
          <p className="step-hero__meta-label">Project</p>
          <p className="step-hero__meta-value">
            <Link to={`/project/${projectSlug}`} className="step-hero__project-link">
              {projectTitle}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default StepHero;
