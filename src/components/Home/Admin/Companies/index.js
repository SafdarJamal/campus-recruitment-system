import React from 'react';
import PropTypes from 'prop-types';

const Companies = ({ companies, handleDelete }) => {
  return (
    <div>
      <h1>Companies</h1>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{company.companyName}</td>
              <td>{company.companyEmail}</td>
              <td>{company.companyPhone}</td>
              <td>
                <button data-id={company.id} onClick={handleDelete}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Companies.propTypes = {
  companies: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default Companies;
