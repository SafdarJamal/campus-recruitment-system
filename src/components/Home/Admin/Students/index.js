import React from 'react';
import PropTypes from 'prop-types';

const Students = ({ students, handleDelete }) => {
  return (
    <div>
      <h1>Students</h1>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>
                <button data-id={student.id} onClick={handleDelete}>
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

Students.propTypes = {
  students: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default Students;
