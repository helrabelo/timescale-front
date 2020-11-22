import React, { useState } from 'react';

import './navbar.scss';

import Container from '../HOCs/Container';

const Navbar = () => {
  const [burgerMenuVisibility, setBurgerMenuVisibility] = useState(false);

  const toggleMenu = () => {
    setBurgerMenuVisibility(!burgerMenuVisibility);
  };

  return (
    <header className="navbar-wrapper">
      <Container className="navbar">
        <div className="logo">
          <h1>Travelize</h1>
          <span>My travelling experiences</span>
        </div>
        <nav>
          <a href="/" className="link hide-mobile">
            Home
          </a>
          <a href="/" className="link hide-mobile">
            Blog
          </a>
          <a href="/" className="button button-primary hide-mobile">
            About
          </a>
          <button onClick={toggleMenu} className="burger-menu hide-desktop">
            <span />
            <span />
            <span />
          </button>
        {burgerMenuVisibility ? (
          <div className="burger-menu-content hide-desktop">
            <button onClick={toggleMenu} className="close-menu">
            &#10006;
          </button>
            <a href="/">Home</a>
            <a href="/">Blog</a>
            <a href="/" className="button button-primary">
              About
            </a>
          </div>
        ) : null}
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
