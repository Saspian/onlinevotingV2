import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import LoginFields from './LoginFields';

const Login = ({ overlayOff, nextChange }) => {
  return (
    <div className="login-overlay">
      <div className="login-holder">
        <button className="overlay-off" onClick={overlayOff}>
          Close [X]
        </button>
        <div className="login">
          <div className="top-line">
            <p>Sign in to continue</p>
            <a onClick={nextChange}>Register now</a>
          </div>
          <LoginFields />
        </div>
      </div>
    </div>
  );
};
export default Login;

Login.propTypes = {
  overlayOff: PropTypes.func,
  nextChange: PropTypes.func
};
