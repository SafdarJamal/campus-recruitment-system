import React from 'react';
import PropTypes from 'prop-types';

const SignUp = ({ handleChange, handleSubmit, error }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <p>{error}</p>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
        />
        <br />
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

SignUp.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};

export default SignUp;
