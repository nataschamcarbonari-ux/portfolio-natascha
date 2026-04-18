import React from 'react';
import clsx from 'clsx';
import styles from './SideNav.module.css';

interface SideNavProps {
  steps: { id: number; title: string }[];
  activeStep: number;
}

const SideNav: React.FC<SideNavProps> = ({ steps, activeStep }) => {
  const scrollTo = (id: number) => {
    const el = document.getElementById(`step-${id}`);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <p className={styles.label}>Process</p>
      <ul className={styles.list}>
        {steps.map((step) => (
          <li key={step.id}>
            <button
              className={clsx(styles.item, { [styles.itemActive]: activeStep === step.id })}
              onClick={() => scrollTo(step.id)}
            >
              <span className={styles.num}>{String(step.id).padStart(2, '0')}</span>
              <span className={styles.title}>{step.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;
