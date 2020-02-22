import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ user, handleLogOut }) => {
  return (
    <div>
      <h1>Home</h1>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Email: {user.email}</p>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

Home.propTypes = {
  user: PropTypes.object.isRequired,
  handleLogOut: PropTypes.func.isRequired
};

export default Home;
