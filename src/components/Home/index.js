import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ user, handleSignOut }) => {
  return (
    <div>
      <h1>Home</h1>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Email: {user.email}</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

Home.propTypes = {
  user: PropTypes.object.isRequired,
  handleSignOut: PropTypes.func.isRequired
};

export default Home;
