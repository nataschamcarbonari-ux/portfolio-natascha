import React from 'react';
import { Link } from 'react-router-dom';
import Tag from '../ui/Tag/Tag';
import { steps } from '../../data/steps';

/**
 * Vertical sinusoidal wave connector that snakes between step cards.
 * The wave alternates left→right→left matching the card alignment.
 * Gradient: purple (#7b5ea7) → navy (#2d4a8a) → teal (#1a6b8a)
 * — same palette as the original presentation.
 */
const WaveConnector: React.FC = () => {
  const STEP_H = 200;   // height per step row in px
  const TOTAL  = (steps.length - 1) * STEP_H;
  const CX     = 90;    // center X of the SVG
  const AMP    = 60;    // horizontal swing amplitude

  // Build smooth S-curves with cubic beziers
  let d = `M ${CX} 0`;
  for (let i = 0; i < steps.length - 1; i++) {
    const y0   = i * STEP_H;
    const y1   = (i + 1) * STEP_H;
    const xEnd = i % 2 === 0 ? CX + AMP : CX - AMP;
    const xCur = i % 2 === 0 ? CX - AMP : CX + AMP;

    if (i === 0) {
      d = `M ${CX} 0`;
    }

    d += ` C ${xCur} ${y0 + STEP_H * 0.45}, ${xEnd} ${y0 + STEP_H * 0.55}, ${xEnd} ${y1}`;
  }

  return (
    <svg
      className="process-wave"
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

const ProcessList: React.FC = () => {
  return (
    <section id="process" className="process-list surface-dark">

      <div className="process-list__header reveal">
        <p className="section-label">Design Process</p>
        <h2 className="section-title">
          Seven steps,<br />one direction
        </h2>
      </div>

      <div className="process-list__wave-layout">
        {/* The organic wave running through the centre */}
        <WaveConnector />

        {/* Step cards — alternating left / right */}
        <div className="process-list__steps">
          {steps.map((step, i) => {
            const isRight = i % 2 !== 0;
            return (
              <div
                key={step.id}
                className={`wave-step wave-step--${isRight ? 'right' : 'left'} reveal`}
              >
                <Link to={`/step/${step.id}`} className="wave-card">
                  <p className="wave-card__num">{String(step.id).padStart(2, '0')}</p>
                  <h3 className="wave-card__title">{step.title}</h3>
                  <p className="wave-card__subtitle">{step.subtitle}</p>
                  <div className="wave-card__tags">
                    {step.tags.map((tag) => (
                      <Tag key={tag} label={tag} variant="dark" />
                    ))}
                  </div>
                  <span className="wave-card__arrow">→</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default ProcessList;