import React from 'react';
import PropTypes from 'prop-types';

import LogOutContainer from '../../../containers/LogOutContainer';

const Admin = ({ user }) => {
  return (
    <div>
      <h1>Admin Home</h1>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Email: {user.email}</p>
      <LogOutContainer />
    </div>
  );
};

Admin.propTypes = {
  user: PropTypes.object.isRequired
};

export default Admin;
