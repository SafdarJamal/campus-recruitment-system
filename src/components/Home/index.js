import React from 'react';
import PropTypes from 'prop-types';

import LogOutContainer from '../../containers/LogOutContainer';

const Home = ({ user }) => {
  return (
    <div>
      <h1>Home</h1>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Email: {user.email}</p>
      <LogOutContainer />
    </div>
  );
};

Home.propTypes = {
  user: PropTypes.object.isRequired
};

export default Home;
