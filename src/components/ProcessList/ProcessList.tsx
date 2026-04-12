import React from 'react';
import StepCard from '../StepCard/StepCard';
import { steps } from '../../data/steps';

const ProcessList: React.FC = () => {
  return (
    <section id="process" className="process-list surface-dark">

      <div className="process-list__header reveal">
        <p className="section-label">Design Process</p>
        <h2 className="section-title">
          Seven steps,<br />one direction
        </h2>
      </div>

      <div className="process-list__steps">
        {steps.map((step) => (
          <StepCard key={step.id} step={step} />
        ))}
      </div>

    </section>
  );
};

export default ProcessList;