import React from 'react';
import PropTypes from 'prop-types';

import LogOutContainer from '../../../containers/LogOutContainer';

const Company = ({ user }) => {
  return (
    <div>
      <h1>Company Home</h1>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Email: {user.email}</p>
      <LogOutContainer />
    </div>
  );
};

Company.propTypes = {
  user: PropTypes.object.isRequired
};

export default Company;
