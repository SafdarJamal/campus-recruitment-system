import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../../../../constants/routes';

const Edit = ({
  firstName,
  lastName,
  phone,
  handleChange,
  handleSubmit,
  error
}) => {
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
          value={firstName}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={phone}
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
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default Edit;
