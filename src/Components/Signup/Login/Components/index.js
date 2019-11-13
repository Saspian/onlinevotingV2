import React from 'react';
import Login from './Login';

const LoginPage = () => {
  const overlayOff = () => {
    document.querySelector('.login-overlay').style.display = 'none';
    document.querySelector('nav').style.filter = 'blur(0)';
    document.querySelector('.jumbo-container').style.filter = 'blur(0)';
    document.querySelector('.filter-line').style.filter = 'blur(0)';
    document.querySelector('.content').style.filter = 'blur(0)';
    document.querySelector('.footer-container').style.filter = 'blur(0)';
  };
  const nextChange = () => {
    document.querySelector('.login-overlay').style.display = 'none';
    document.querySelector('.signup-overlay').style.display = 'block';
  };
  return (
    <div className="login-component">
      <Login overlayOff={overlayOff} nextChange={nextChange} />
    </div>
  );
};
export default LoginPage;
