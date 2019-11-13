import React from 'react';
import PropTypes from 'prop-types';
import './Signup.css';
import SignupFields from './SignupFields';

const Signup = ({ overlayOff, nextChange }) => {
  return (
    <div className="signup-overlay">
      <div className="signup-holder">
        <button className="overlay-off" onClick={overlayOff}>
          Close [X]
        </button>
        <div className="signup">
          <div className="top-line">
            <p>Register to continue</p>
            <a onClick={nextChange}>Login now</a>
          </div>
          <SignupFields />
        </div>
      </div>
    </div>
  );
};
export default Signup;

Signup.propTypes = {
  overlayOff: PropTypes.func,
  nextChange: PropTypes.func
};
