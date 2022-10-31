import React from 'react';
import BootstrapSpinner from 'react-bootstrap/Spinner';

const Spinner = () => {
  return (
    <div className="text-center" style={{ paddingTop: '25%' }}>
      <BootstrapSpinner
        style={{ width: '3rem', height: '3rem' }}
        animation="border"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </BootstrapSpinner>
    </div>
  );
};

export default Spinner;
