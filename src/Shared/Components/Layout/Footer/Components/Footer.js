import React from 'react';
import './Footer.css';

export default () => {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <li>About us</li>
        <li>Contact us</li>
        <li>Our judges</li>
        <li>FAQ</li>
      </div>
      <div className="footer-socials">
        <img className="footer-logo" src="images/cLogo.png" />
        <a href="mailto:itclub@prime.edu.np">itclub@prime.edu.np</a>
        <div className="socials">
          <img src="images/fb.png" alt="facebook" />
          <img src="images/ig.png" alt="facebook" />
          <img src="images/tw.png" alt="facebook" />
        </div>
      </div>
    </div>
  );
};
