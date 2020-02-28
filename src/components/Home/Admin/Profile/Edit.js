import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../../../../constants/routes';

const Edit = ({ user, handleChange, handleSubmit, error }) => {
  const history = useHistory();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Edit Profile</h1>
        <p>{error}</p>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          defaultValue={user.firstName}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          defaultValue={user.lastName}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Update</button>
        <button onClick={() => history.push(ROUTES.PROFILE)}>Cancel</button>
      </form>
    </div>
  );
};

Edit.propTypes = {
  user: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};

export default Edit;
