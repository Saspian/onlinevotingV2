import React from 'react';
import Navbar from './Navbar';

const showLoginPage = () => {
  const overlayOn = () => {
    document.querySelector('.login-overlay').style.display = 'block';
    document.querySelector('nav').style.filter = 'blur(4px)';
    document.querySelector('.jumbo-container').style.filter = 'blur(4px)';
    document.querySelector('.filter-line').style.filter = 'blur(4px)';
    document.querySelector('.content').style.filter = 'blur(4px)';
    document.querySelector('.footer-container').style.filter = 'blur(4px)';
  };

  const logout = () => {
    localStorage.setItem('username', '');
    localStorage.setItem('token', '');
    localStorage.setItem('loggedUserID', '');
    window.location = '/';
  };

  const loggedCheck = () => {
    const tokenChecker = localStorage.getItem('token');
    let loggedStatus = false;

    if (tokenChecker && tokenChecker !== 'undefined') {
      loggedStatus = true;
    }

    if (loggedStatus) {
      document.querySelector('.dropbtn').style.display = 'block';
      document.querySelector('.loginBtn').style.display = 'none';
    }
  };

  return (
    <div className="header-navbar">
      <Navbar overlayOn={overlayOn} loggedCheck={loggedCheck} logout={logout} />
    </div>
  );
};

export default showLoginPage;
