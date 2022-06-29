import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const LogOut = ({ handleLogOut, isProcessing }) => {
  return (
    <Button variant="danger" onClick={handleLogOut} disabled={isProcessing}>
      {isProcessing ? 'Logging Out...' : 'Log Out'}
    </Button>
  );
};

LogOut.propTypes = {
  handleLogOut: PropTypes.func.isRequired,
  isProcessing: PropTypes.bool.isRequired,
};

export default LogOut;
