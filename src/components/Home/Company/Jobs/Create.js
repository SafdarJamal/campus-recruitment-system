import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../../../../constants/routes';

const Create = ({ handleChange, handleSubmit, error }) => {
  const history = useHistory();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Post a Job</h1>
        <p>{error}</p>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />
        <br />
        <textarea
          rows="10"
          cols="30"
          name="description"
          placeholder="Description"
          onChange={handleChange}
        ></textarea>

        <br />
        <button type="submit">Post</button>
        <button onClick={() => history.push(ROUTES.JOBS)}>Cancel</button>
      </form>
    </div>
  );
};

Create.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};

export default Create;
