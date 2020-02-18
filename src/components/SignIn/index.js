import React from 'react';
import PropTypes from 'prop-types';

const SignIn = ({ handleChange, handleSubmit, error }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <p>{error}</p>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

SignIn.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};

export default SignIn;
