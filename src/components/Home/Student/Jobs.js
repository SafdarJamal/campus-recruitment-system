import React from 'react';
import PropTypes from 'prop-types';

const Jobs = ({ jobs }) => {
  return (
    <div>
      <h1>Jobs</h1>
      {jobs.map((job, i) => (
        <p key={i}>{job.title}</p>
      ))}
    </div>
  );
};

Jobs.propTypes = {
  jobs: PropTypes.object.isRequired
};

export default Jobs;
