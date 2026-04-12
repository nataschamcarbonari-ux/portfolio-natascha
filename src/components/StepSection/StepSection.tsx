import React from 'react';
import Card from '../ui/Card/Card';
import ImagePlaceholder from '../ui/ImagePlaceholder/ImagePlaceholder';
import type { StepSectionData } from '../../types';

interface StepSectionProps {
  section: StepSectionData;
}

const StepSection: React.FC<StepSectionProps> = ({ section }) => {
  const { label, heading, body, cards, images } = section;

  return (
    <div className="step-section reveal">
      <p className="step-section__label">{label}</p>
      <h2 className="step-section__heading">{heading}</h2>

      {body && (
        <p className="step-section__body">{body}</p>
      )}

      {/* Cards grid — shown when cards are provided */}
      {cards && cards.length > 0 && (
        <div className="step-section__cards">
          {cards.map((card, i) => (
            <Card
              key={i}
              label={card.label}
              text={card.text}
              wide={card.wide}
            />
          ))}
        </div>
      )}

      {/* Images — shown when images are provided */}
      {images && images.length > 0 && (
        <div className={`step-section__images step-section__images--${images.length > 1 ? 'grid' : 'single'}`}>
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

      {/* Fallback placeholders when section has no images yet */}
      {(!images || images.length === 0) && (
        <ImagePlaceholder label="Add image — overview / artifact" aspect="wide" />
      )}
    </div>
  );
};

export default StepSection;