import React from 'react';

import heroBackground from '../../images/hero-background.jpg';

import Image from '../HOCs/Image';

import Container from '../HOCs/Container';

import './hero.scss';

const Hero = () => {
  return (
    <aside>
      <Container className="hero-banner" fullwidth>
        <Image src={heroBackground} alt="Main hero" />
      </Container>
    </aside>
  );
};

export default Hero;
