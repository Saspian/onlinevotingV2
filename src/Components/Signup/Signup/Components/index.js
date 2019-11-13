import React from 'react';
import Signup from './Signup';

const SignupPage = () => {
  const overlayOff = () => {
    document.querySelector('.signup-overlay').style.display = 'none';
    document.querySelector('nav').style.filter = 'blur(0)';
    document.querySelector('.jumbo-container').style.filter = 'blur(0)';
    document.querySelector('.filter-line').style.filter = 'blur(0)';
    document.querySelector('.content').style.filter = 'blur(0)';
    document.querySelector('.footer-container').style.filter = 'blur(0)';
  };
  const nextChange = () => {
    document.querySelector('.login-overlay').style.display = 'block';
    document.querySelector('.signup-overlay').style.display = 'none';
  };
  return (
    <div className="signup-component">
      <Signup overlayOff={overlayOff} nextChange={nextChange} />
    </div>
  );
};

export default SignupPage;
