import React from 'react';
import clsx from 'clsx';
import Card from '../../ui/Card/Card';
import ImagePlaceholder from '../../ui/ImagePlaceholder/ImagePlaceholder';
import OpportunityFlow from '../../OpportunityFlow';
import type { StepSectionData } from '../../../types';
import styles from './CaseSection.module.css';

interface CaseSectionProps {
  section: StepSectionData;
  index: number;
}

const CaseSection: React.FC<CaseSectionProps> = ({ section, index }) => (
  <div className={`${styles.section} reveal`} style={{ animationDelay: `${index * 60}ms` }}>
    <p className={styles.label}>{section.label}</p>
    <h3 className={styles.heading}>{section.heading}</h3>
    {section.body && <p className={styles.body}>{section.body}</p>}

    {section.cards && section.cards.length > 0 && (
      <div className={styles.cards}>
        {section.cards.map((card, i) => (
          <Card key={i} label={card.label} text={card.text} wide={card.wide} />
        ))}
      </div>
    )}

    {section.label === 'Opportunity mapping' ? (
      <OpportunityFlow />
    ) : section.images && section.images.length > 0 ? (
      <div className={clsx(styles.images, section.images.length > 1 ? styles.imagesGrid : '')}>
        {section.images.map((src, i) => (
          <ImagePlaceholder
            key={i}
            src={src || undefined}
            label="Add image"
            aspect={section.images!.length > 1 ? 'square' : 'wide'}
          />
        ))}
      </div>
    ) : (
      (!section.cards || section.cards.length === 0) && (
        <ImagePlaceholder label="Add image" aspect="wide" />
      )
    )}
  </div>
);

export default CaseSection;
