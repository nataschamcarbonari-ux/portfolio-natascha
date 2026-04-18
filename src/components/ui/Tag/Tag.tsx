import React from 'react';
import clsx from 'clsx';
import styles from './Tag.module.css';

interface TagProps {
  label: string;
  variant?: 'default' | 'dark';
}

const Tag: React.FC<TagProps> = ({ label, variant = 'default' }) => (
  <span className={clsx(styles.tag, variant === 'default' ? styles.variantDefault : styles.variantDark)}>
    {label}
  </span>
);

export default Tag;
