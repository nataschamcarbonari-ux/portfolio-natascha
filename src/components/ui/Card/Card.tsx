import React from 'react';
import clsx from 'clsx';
import styles from './Card.module.css';

interface CardProps {
  label: string;
  text: string;
  wide?: boolean;
}

const Card: React.FC<CardProps> = ({ label, text, wide = false }) => (
  <div className={clsx(styles.card, { [styles.wide]: wide })}>
    <p className={styles.label}>{label}</p>
    <p className={styles.text}>{text}</p>
  </div>
);

export default Card;
