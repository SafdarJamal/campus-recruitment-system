import React from 'react';
import PropTypes from 'prop-types';

const Companies = ({ companies }) => {
  return (
    <div>
      <h1>Companies</h1>
      {companies.map((company, i) => (
        <p key={i}>{company.name}</p>
      ))}
    </div>
  );
};

Companies.propTypes = {
  companies: PropTypes.object.isRequired
};

export default Companies;
