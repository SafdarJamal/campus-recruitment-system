import React, { Component } from 'react';
import { withAPI } from '../../../../services/api';

import Jobs from '../../../../components/Home/Admin/Jobs';

class JobsContainer extends Component {
  state = { jobs: [], isProcessing: false, selectedJobId: '' };

  componentDidMount() {
    this.getJobs();
  }

  getJobs = () => {
    const { api } = this.props;

    api
      .getJobs()
      .then(response => {
        this.setState({ jobs: response.data });
      })
      .catch(error => console.log(error.response.data.message));
  };

  handleDelete = e => {
    const { api } = this.props;
    const id = e.target.dataset.id;

    this.setState({ isProcessing: true, selectedJobId: id });

    api
      .deleteJob(id)
      .then(() => this.getJobs())
      .catch(error => console.log(error.response.data.message));
  };

  render() {
    const { jobs, isProcessing, selectedJobId } = this.state;

    return (
      <Jobs
        jobs={jobs}
        handleDelete={this.handleDelete}
        isProcessing={isProcessing}
        selectedJobId={selectedJobId}
      />
    );
  }
}

export default withAPI(JobsContainer);
