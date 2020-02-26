import React from 'react';
import PropTypes from 'prop-types';

const LogOut = ({ handleLogOut }) => {
  return <button onClick={handleLogOut}>Log Out</button>;
};

LogOut.propTypes = {
  handleLogOut: PropTypes.func.isRequired
};

export default LogOut;
