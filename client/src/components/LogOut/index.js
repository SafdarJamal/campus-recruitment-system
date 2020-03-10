import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const LogOut = ({ handleLogOut }) => {
  return (
    <Button variant="danger" onClick={handleLogOut}>
      Log Out
    </Button>
  );
};

LogOut.propTypes = {
  handleLogOut: PropTypes.func.isRequired
};

export default LogOut;
