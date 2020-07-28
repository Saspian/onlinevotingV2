import React from 'react';
import PropTypes from 'prop-types';

const Loginfields = ({ changeHandler3, checkUser }) => {
  const errorTextColor = {
    color: 'red'
  };
  return (
    <div className="login-fields">
      <form onSubmit={checkUser}>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="email"
          onChange={changeHandler3}
          required="required"
        />
        <br />
        <p id="forLoginError" style={errorTextColor}></p>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={changeHandler3}
          required="required"
        />
        <br />
        <p id="forLoginError2" style={errorTextColor}></p>
        <br />
        <button type="submit" className="login-btn" onClick="login">
          LOGIN NOW
        </button>
      </form>
    </div>
  );
};

export default Loginfields;

Loginfields.propTypes = {
  changeHandler3: PropTypes.func,
  checkUser: PropTypes.func
};
