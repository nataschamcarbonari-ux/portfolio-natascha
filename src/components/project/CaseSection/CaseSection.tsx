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

    {/* Canva / Figma / any iframe embed */}
    {section.embedUrl && (
      <div className={styles.embedWrapper}>
        <iframe
          loading="lazy"
          className={styles.embedFrame}
          src={section.embedUrl}
          title={section.heading}
          frameBorder="0"
          allow="fullscreen"
          allowFullScreen
        />
        {section.embedHref && (
          <a
            href={section.embedHref}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.embedCaption}
          >
            {section.embedCaption ?? 'View on Canva ↗'}
          </a>
        )}
      </div>
    )}

    {/* Images (only rendered when no embed) */}
    {!section.embedUrl && section.label === 'Opportunity mapping' ? (
      <OpportunityFlow />
    ) : !section.embedUrl && section.images && section.images.length > 0 ? (
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
    ) : !section.embedUrl && !section.cards?.length && section.label !== 'Opportunity mapping' ? (
      <ImagePlaceholder label="Add image" aspect="wide" />
    ) : null}
  </div>
);

export default CaseSection;