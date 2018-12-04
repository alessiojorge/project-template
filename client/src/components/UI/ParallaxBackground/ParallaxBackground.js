import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const parallaxBackground = props => {
  return (
    <Parallax
      className="parallax-background"
      offsetYMax={props.offset}
      offsetYMin={-props.offset}
      slowerScrollRate
    >
      <img
        className="parallax-background__img"
        src={props.src}
        alt={props.alt}
        style={{ height: props.height }}
      />
    </Parallax>
  );
};

export default parallaxBackground;
