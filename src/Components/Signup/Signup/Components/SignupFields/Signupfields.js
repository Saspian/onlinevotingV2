import React from 'react';
import PropTypes from 'prop-types';

const Signupfields = ({ changeHandler2, submitHandler }) => {
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
        />{' '}
        <br />
        <br />
        <input
          type="text"
          id="email"
          name="email"
          placeholder="email"
          onChange={changeHandler2}
          required="required"
        />{' '}
        <br /> <br />
        <input
          type="password"
          id="psw"
          name="password"
          placeholder="Password"
          onChange={changeHandler2}
          required="required"
        />{' '}
        <br /> <br />
        <input
          type="password"
          id="repsw"
          name="repassword"
          placeholder="Confirm Password"
          onChange={changeHandler2}
          required="required"
        />
        <br />
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
