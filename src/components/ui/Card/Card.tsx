import React from 'react';

interface CardProps {
  label: string;
  text: string;
  wide?: boolean;
}

const Card: React.FC<CardProps> = ({ label, text, wide = false }) => {
  return (
    <div className={`card ${wide ? 'card--wide' : ''}`}>
      <p className="card__label">{label}</p>
      <p className="card__text">{text}</p>
    </div>
  );
};

export default Card;