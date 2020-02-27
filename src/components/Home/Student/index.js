import React from 'react';
import PropTypes from 'prop-types';

import LogOutContainer from '../../../containers/LogOutContainer';

const Student = ({ user }) => {
  return (
    <div>
      <h1>Student Home</h1>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Email: {user.email}</p>
      <LogOutContainer />
    </div>
  );
};

Student.propTypes = {
  user: PropTypes.object.isRequired
};

export default Student;
