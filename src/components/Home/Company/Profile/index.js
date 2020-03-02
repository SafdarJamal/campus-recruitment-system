import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../../../../constants/routes';

const Profile = ({
  firstName,
  lastName,
  companyName,
  companyEmail,
  companyPhone
}) => {
  const history = useHistory();

  return (
    <div>
      <h1>Profile</h1>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Company Name: {companyName}</p>
      <p>Company Email: {companyEmail}</p>
      <p>Company Phone: {companyPhone}</p>
      <button onClick={() => history.push(ROUTES.PROFILE_EDIT)}>Edit</button>
    </div>
  );
};

Profile.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  companyEmail: PropTypes.string.isRequired,
  companyPhone: PropTypes.string.isRequired
};

export default Profile;
