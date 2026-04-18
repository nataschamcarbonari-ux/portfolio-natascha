import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Card from '../../ui/Card/Card';
import ImagePlaceholder from '../../ui/ImagePlaceholder/ImagePlaceholder';
import OpportunityFlow from '../../OpportunityFlow';
import type { StepSectionData } from '../../../types';
import styles from './StepSection.module.css';

interface StepSectionProps {
  section: StepSectionData;
}

const StepSection: React.FC<StepSectionProps> = ({ section }) => {
  const { label, heading, body, cards, images, linkText, linkHref } = section;

  return (
    <div className={`${styles.section} reveal`}>
      <p className={styles.label}>{label}</p>
      <h2 className={styles.heading}>{heading}</h2>

      {body && <p className={styles.body}>{body}</p>}

      {linkText && linkHref && (
        <Link to={linkHref} className={styles.link}>{linkText}</Link>
      )}

      {cards && cards.length > 0 && (
        <div className={styles.cards}>
          {cards.map((card, i) => (
            <Card key={i} label={card.label} text={card.text} wide={card.wide} />
          ))}
        </div>
      )}

      {label === 'Opportunity mapping' ? (
        <OpportunityFlow />
      ) : images && images.length > 0 && (
        <div className={clsx(styles.images, images.length > 1 ? styles.imagesGrid : '')}>
          {images.map((src, i) => {
            if (src && src.includes('canva.com/design')) {
              // ensure embed param
              const iframeSrc = src.includes('embed') ? src : (src.includes('?') ? `${src}&embed` : `${src}?embed`);
              // extract design id for utm_content
              let designId = '';
              try {
                const u = new URL(src);
                const parts = u.pathname.split('/');
                designId = parts[2] || '';
              } catch (e) { /* ignore */ }
              const anchorHref = src.includes('utm_content') ? src : (src.includes('?') ? `${src}&utm_content=${designId}&utm_campaign=designshare&utm_medium=embeds&utm_source=link` : `${src}?utm_content=${designId}&utm_campaign=designshare&utm_medium=embeds&utm_source=link`);

              return (
                <div key={i}>
                  <div style={{position: 'relative', width: '100%', height: 0, paddingTop: '100.0000%', paddingBottom: 0, boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform'}}>
                    <iframe
                      loading="lazy"
                      style={{position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0}}
                      src={iframeSrc}
                      title={`Canva embed ${i}`}
                      frameBorder="0"
                      allow="fullscreen"
                      allowFullScreen
                    />
                  </div>
                  <a href={anchorHref} target="_blank" rel="noopener noreferrer">App Tennis</a>
                </div>
              );
            }

            return (
              <ImagePlaceholder
                key={i}
                src={src || undefined}
                label={`Image ${i + 1}`}
                aspect={images.length > 1 ? 'square' : 'wide'}
              />
            );
          })}
        </div>
      )}

      {label === 'Opportunity mapping' ? null : ((!images || images.length === 0) && (
        <ImagePlaceholder label="Add image — overview / artifact" aspect="wide" />
      ))}
    </div>
  );
};

export default StepSection;
