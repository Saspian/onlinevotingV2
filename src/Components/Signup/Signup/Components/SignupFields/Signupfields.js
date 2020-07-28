import React from 'react';
import PropTypes from 'prop-types';

const Signupfields = ({ changeHandler2, submitHandler }) => {
  const errorTextColor = {
    color: 'red'
  };
  return (
    <div className="login-fields">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="username"
          onChange={changeHandler2}
          required="required"
        />
        <br />
        <p id="forSignupError" style={errorTextColor}></p>
        <br />
        <input
          type="text"
          id="email"
          name="email"
          placeholder="email"
          onChange={changeHandler2}
          required="required"
        />
        <br />
        <p id="forSignupError2" style={errorTextColor}></p>
        <br />
        <input
          type="password"
          id="psw"
          name="password"
          placeholder="Password"
          onChange={changeHandler2}
          required="required"
        />{' '}
        <br />
        <p id="forSignupError3" style={errorTextColor}></p>
        <br />
        <input
          type="password"
          id="repsw"
          name="repassword"
          placeholder="Confirm Password"
          onChange={changeHandler2}
          required="required"
        />
        <br />
        <p id="forSignupError4" style={errorTextColor}></p>
        <br />
        <button type="submit" className="login-btn">
          CREATE YOUR ACCOUNT
        </button>
      </form>
    </div>
  );
};
export default Signupfields;

Signupfields.propTypes = {
  changeHandler2: PropTypes.func,
  submitHandler: PropTypes.func
};
