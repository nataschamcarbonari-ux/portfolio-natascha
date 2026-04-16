import React from 'react';
import type { Outcome } from '../../types';

interface OutcomesProps {
  outcomes: Outcome[];
}

const Outcomes: React.FC<OutcomesProps> = ({ outcomes }) => {
  return (
    <section id="outcomes" className="outcomes">

      <div className="reveal">
        <p className="section-label">Outcomes</p>
        <h2 className="section-title">
          What<br />came out of it
        </h2>
      </div>

      <div className="outcomes__grid reveal">
        {outcomes.map((o, i) => (
          <div key={o.id} className="outcomes__card">
            <p className="outcomes__card-num">{String(i + 1).padStart(2, '0')}</p>
            <h3 className="outcomes__card-title">{o.title}</h3>
            <p className="outcomes__card-text">{o.description}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Outcomes;
