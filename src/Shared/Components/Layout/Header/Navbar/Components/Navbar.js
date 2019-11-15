import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Navbar.css';

const Navbar = ({ overlayOn, loggedCheck, logout }) => {
  useEffect(() => {
    loggedCheck();
  });
  return (
    <header>
      <nav>
        <div className="nav-links">
          <Link to="/" className="logo">
            <li>
              <img src="/images/cLogo.png" alt="logo" />
              <h3>ICT Meetup v6.0</h3>
            </li>
          </Link>
          <div className="buttons">
            <li>
              <div className="dropdown">
                <button className="dropbtn">
                  <i className="fas fa-user"></i> profile
                </button>
                <div className="dropdown-content">
                  <p>{localStorage.getItem('username')}</p>
                  <p onClick={logout}>logout</p>
                </div>
              </div>
              <button className="loginBtn" onClick={overlayOn}>
                Login
              </button>
              <Link to="/submitproject" className="submitBtn">
                Submit Project
              </Link>
            </li>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

Navbar.propTypes = {
  overlayOn: PropTypes.func,
  loggedCheck: PropTypes.func,
  logout: PropTypes.func
};
