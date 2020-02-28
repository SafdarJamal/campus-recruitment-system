import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../../../../constants/routes';

const Jobs = ({ jobs }) => {
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
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{job.title}</td>
              <td>{job.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Jobs.propTypes = {
  jobs: PropTypes.array.isRequired
};

export default Jobs;
