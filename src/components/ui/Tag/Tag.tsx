import React from 'react';

interface TagProps {
  label: string;
  variant?: 'default' | 'dark';
}

const Tag: React.FC<TagProps> = ({ label, variant = 'default' }) => {
  return (
    <span className={`tag tag--${variant}`}>
      {label}
    </span>
  );
};

export default Tag;