import React from 'react';
import PropTypes from 'prop-types';

const Companies = ({ companies }) => {
  return (
    <div>
      <h1>Companies</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, i) => (
            <tr key={i}>
              <td>{company.companyName}</td>
              <td>{company.companyEmail}</td>
              <td>{company.companyPhone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Companies.propTypes = {
  companies: PropTypes.array.isRequired
};

export default Companies;
