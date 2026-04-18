import React from 'react';
import clsx from 'clsx';
import styles from './ImagePlaceholder.module.css';

interface ImagePlaceholderProps {
  label?: string;
  aspect?: 'wide' | 'square';
  src?: string;
  alt?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  label = 'Add image',
  aspect = 'wide',
  src,
  alt,
}) => {
  const containerClass = clsx(styles.placeholder, aspect === 'wide' ? styles.wide : styles.square);

  if (src) {
    return (
      <div className={containerClass}>
        <img src={src} alt={alt ?? label} className={styles.img} />
      </div>
    );
  }

  return (
    <div className={containerClass}>
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default ImagePlaceholder;
