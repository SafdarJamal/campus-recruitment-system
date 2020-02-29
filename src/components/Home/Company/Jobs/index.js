import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../../../../constants/routes';

const Jobs = ({ jobs, handleDelete }) => {
  const history = useHistory();

  return (
    <div>
      <h1>Jobs</h1>
      <button onClick={() => history.push(ROUTES.JOBS_CREATE)}>
        Post a Job
      </button>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{job.title}</td>
              <td>{job.description}</td>
              <td>
                <button data-index={i} onClick={handleDelete}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Jobs.propTypes = {
  jobs: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default Jobs;
