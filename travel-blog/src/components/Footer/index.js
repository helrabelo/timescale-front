import React from 'react';

import './footer.scss';

import Container from '../HOCs/Container';

const Footer = () => {
  return (
    <footer>
      <Container className="footer">
        <div className="left">
          <a className="link" href="/">@ 2020 Travelize</a>
        </div>
        <div className="right">
          <a className="link" href="/">Privacy Policy</a>
          <a className="link" href="/">Terms and Conditions</a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
