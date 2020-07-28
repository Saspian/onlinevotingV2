import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <Link to="/about" className="link about">
          About us
        </Link>
        <Link to="/contact" className="link contact">
          Contact us
        </Link>
        <Link to="/judge" className="link judges">
          Our Judges
        </Link>
        <Link to="/faq" className="link faq">
          FAQ
        </Link>
      </div>
      <div className="footer-socials">
        <img className="footer-logo" src="/images/cLogo.png" />
        <a href="mailto:itclub@prime.edu.np">itclub@prime.edu.np</a>
        <div className="socials">
          <i alt="facebook" className="fab fa-facebook-square"></i>
          <i alt="instagram" className="fab fa-instagram" />
          <i alt="twitter" className="fab fa-twitter-square" />
        </div>
      </div>
    </div>
  );
};
