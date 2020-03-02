import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../../../../constants/routes';

const Edit = ({
  firstName,
  lastName,
  companyName,
  companyEmail,
  companyPhone,
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
          name="companyName"
          placeholder="Company Name"
          value={companyName}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="companyEmail"
          placeholder="Company Email"
          value={companyEmail}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="companyPhone"
          placeholder="Company Phone"
          value={companyPhone}
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
  companyName: PropTypes.string.isRequired,
  companyEmail: PropTypes.string.isRequired,
  companyPhone: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default Edit;
