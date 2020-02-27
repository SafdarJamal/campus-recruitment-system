import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ profile }) => {
  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
};

Profile.propTypes = {
  profile: PropTypes.object.isRequired
};

export default Profile;
