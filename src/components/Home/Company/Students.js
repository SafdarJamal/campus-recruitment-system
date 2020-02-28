import React from 'react';
import PropTypes from 'prop-types';

const Students = ({ students }) => {
  return (
    <div>
      <h1>Students</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, i) => (
            <tr key={i}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Students.propTypes = {
  students: PropTypes.array.isRequired
};

export default Students;
