import React from 'react';
import { Link } from 'react-router-dom';
import Tag from '../../ui/Tag/Tag';
import type { Step } from '../../../types';
import styles from './ProcessList.module.css';

interface ProcessListProps {
  steps: Step[];
  projectSlug: string;
}

interface WaveConnectorProps {
  totalSteps: number;
}

const WaveConnector: React.FC<WaveConnectorProps> = ({ totalSteps }) => {
  const STEP_H = 200;
  const TOTAL  = (totalSteps - 1) * STEP_H;
  const CX     = 90;
  const AMP    = 60;

  let d = `M ${CX} 0`;
  for (let i = 0; i < totalSteps - 1; i++) {
    const y0   = i * STEP_H;
    const y1   = (i + 1) * STEP_H;
    const xEnd = i % 2 === 0 ? CX + AMP : CX - AMP;
    const xCur = i % 2 === 0 ? CX - AMP : CX + AMP;
    if (i === 0) d = `M ${CX} 0`;
    d += ` C ${xCur} ${y0 + STEP_H * 0.45}, ${xEnd} ${y0 + STEP_H * 0.55}, ${xEnd} ${y1}`;
  }

  return (
    <svg
      className={styles.wave}
      width="180"
      height={TOTAL}
      viewBox={`0 0 180 ${TOTAL}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2={TOTAL} gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#7b5ea7" />
          <stop offset="45%"  stopColor="#2d4a8a" />
          <stop offset="100%" stopColor="#1a6b8a" />
        </linearGradient>
      </defs>
      <path
        d={d}
        stroke="url(#waveGrad)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

const ProcessList: React.FC<ProcessListProps> = ({ steps, projectSlug }) => (
  <section id="process" className={`${styles.processList} surface-dark`}>

    <div className={`${styles.header} reveal`}>
      <p className="section-label">Design Process</p>
      <h2 className="section-title">
        Seven steps,<br />one direction
      </h2>
    </div>

    <div className={styles.waveLayout}>
      <WaveConnector totalSteps={steps.length} />

      <div className={styles.steps}>
        {steps.map((step, i) => {
          const isRight = i % 2 !== 0;
          return (
            <div
              key={step.id}
              className={`${styles.step} ${isRight ? styles.stepRight : styles.stepLeft} reveal`}
            >
              <Link to={`/project/${projectSlug}/step/${step.id}`} className={styles.card}>
                <p className={styles.cardNum}>{String(step.id).padStart(2, '0')}</p>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardSubtitle}>{step.subtitle}</p>
                <div className={styles.cardTags}>
                  {step.tags.map((tag) => (
                    <Tag key={tag} label={tag} variant="dark" />
                  ))}
                </div>
                <span className={styles.cardArrow}>→</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>

  </section>
);

export default ProcessList;
