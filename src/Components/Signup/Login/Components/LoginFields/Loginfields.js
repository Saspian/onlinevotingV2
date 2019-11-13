import React from 'react';
import PropTypes from 'prop-types';

const Loginfields = ({ changeHandler3, checkUser }) => {
  return (
    <div className="login-fields">
      <form onSubmit={checkUser}>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="email"
          onChange={changeHandler3}
        />
        <br />
        <br />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={changeHandler3}
        />
        <br />
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
