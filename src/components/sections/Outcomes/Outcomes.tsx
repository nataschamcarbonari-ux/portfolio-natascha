import React from 'react';
import type { Outcome } from '../../../types';
import styles from './Outcomes.module.css';

interface OutcomesProps {
  outcomes: Outcome[];
}

const Outcomes: React.FC<OutcomesProps> = ({ outcomes }) => (
  <section id="outcomes" className={styles.outcomes}>

    <div className="reveal">
      <p className="section-label">Outcomes</p>
      <h2 className="section-title">
        What<br />came out of it
      </h2>
    </div>

    <div className={`${styles.grid} reveal`}>
      {outcomes.map((o, i) => (
        <div key={o.id} className={styles.card}>
          <p className={styles.cardNum}>{String(i + 1).padStart(2, '0')}</p>
          <h3 className={styles.cardTitle}>{o.title}</h3>
          <p className={styles.cardText}>{o.description}</p>
        </div>
      ))}
    </div>

  </section>
);

export default Outcomes;
