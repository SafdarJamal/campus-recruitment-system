import React from 'react';
import PropTypes from 'prop-types';

const Student = ({ user }) => {
  return (
    <div>
      <h1>Student Home</h1>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

Student.propTypes = {
  user: PropTypes.object.isRequired
};

export default Student;
