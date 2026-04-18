import React from 'react';
import clsx from 'clsx';
import Card from '../../ui/Card/Card';
import ImagePlaceholder from '../../ui/ImagePlaceholder/ImagePlaceholder';
import type { StepSectionData } from '../../../types';
import styles from './StepSection.module.css';

interface StepSectionProps {
  section: StepSectionData;
}

const StepSection: React.FC<StepSectionProps> = ({ section }) => {
  const { label, heading, body, cards, images } = section;

  return (
    <div className={`${styles.section} reveal`}>
      <p className={styles.label}>{label}</p>
      <h2 className={styles.heading}>{heading}</h2>

      {body && <p className={styles.body}>{body}</p>}

      {cards && cards.length > 0 && (
        <div className={styles.cards}>
          {cards.map((card, i) => (
            <Card key={i} label={card.label} text={card.text} wide={card.wide} />
          ))}
        </div>
      )}

      {images && images.length > 0 && (
        <div className={clsx(styles.images, images.length > 1 ? styles.imagesGrid : '')}>
          {images.map((src, i) => (
            <ImagePlaceholder
              key={i}
              src={src || undefined}
              label={`Image ${i + 1}`}
              aspect={images.length > 1 ? 'square' : 'wide'}
            />
          ))}
        </div>
      )}

      {(!images || images.length === 0) && (
        <ImagePlaceholder label="Add image — overview / artifact" aspect="wide" />
      )}
    </div>
  );
};

export default StepSection;
