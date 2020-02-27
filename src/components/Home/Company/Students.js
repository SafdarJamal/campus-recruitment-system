import React from 'react';
import PropTypes from 'prop-types';

const Students = ({ students }) => {
  return (
    <div>
      <h1>Students</h1>
      {students.map((student, i) => (
        <p key={i}>{student.firstName}</p>
      ))}
    </div>
  );
};

Students.propTypes = {
  students: PropTypes.object.isRequired
};

export default Students;
