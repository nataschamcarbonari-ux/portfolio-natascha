import React from 'react';

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
  if (src) {
    return (
      <div className={`img-placeholder img-placeholder--${aspect}`}>
        <img src={src} alt={alt ?? label} className="img-placeholder__img" />
      </div>
    );
  }

  return (
    <div className={`img-placeholder img-placeholder--${aspect}`}>
      <span className="img-placeholder__label">{label}</span>
    </div>
  );
};

export default ImagePlaceholder;