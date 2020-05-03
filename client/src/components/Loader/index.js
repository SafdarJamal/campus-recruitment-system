import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <div className="text-center" style={{ paddingTop: '25%' }}>
      <Spinner
        style={{ width: '3rem', height: '3rem' }}
        animation="border"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
