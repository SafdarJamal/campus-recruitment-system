import React, { Component } from 'react';
import { withAPI } from '../../../../services/api';

import Jobs from '../../../../components/Home/Student/Jobs';

class JobsContainer extends Component {
  state = { jobs: [] };

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
      .catch(error => console.log(error.message));
  };

  render() {
    return <Jobs jobs={this.state.jobs} />;
  }
}

export default withAPI(JobsContainer);
