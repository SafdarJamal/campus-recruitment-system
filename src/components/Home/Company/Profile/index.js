import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../../../../constants/routes';

const Profile = ({ user }) => {
  const history = useHistory();

  return (
    <div>
      <h1>Profile</h1>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Company Name: {user.companyName}</p>
      <p>Company Email: {user.companyEmail}</p>
      <p>Company Phone: {user.companyPhone}</p>
      <button onClick={() => history.push(ROUTES.PROFILE_EDIT)}>Edit</button>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.object.isRequired
};

export default Profile;
