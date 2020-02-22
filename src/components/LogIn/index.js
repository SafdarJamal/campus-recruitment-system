import React from 'react';
import PropTypes from 'prop-types';

const LogIn = ({ handleChange, handleSubmit, error }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Log In</h1>
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
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

LogIn.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};

export default LogIn;
