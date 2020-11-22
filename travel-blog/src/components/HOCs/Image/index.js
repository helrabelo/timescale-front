import React from 'react';

import './image.scss';

const Image = ({ src, className, id, alt }) => {
  return (
    <img
      id={id}
      src={src}
      alt={alt}
      className={`image ${typeof className !== 'undefined' ? className : ''}`}
    />
  );
};

export default Image;
