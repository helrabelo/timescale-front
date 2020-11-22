import React from 'react';

import './container.scss';

const Container = ({ className, id, fullwidth, small, children }) => {
  return (
    <div
      id={id}
      className={`container ${typeof className !== 'undefined' ? className : ''}  ${typeof 
        fullwidth !== 'undefined' ? 'fullwidth' : ''
      } ${typeof small !== 'undefined' ? 'small' : ''}`}
    >
      {children}
    </div>
  );
};

export default Container;
