import React, { Component } from 'react';
import { withAPI } from '../../../../services/api';

import Jobs from '../../../../components/Home/Admin/Jobs';

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

  handleDelete = e => {
    const { api } = this.props;

    api
      .deleteJob(e.target.dataset.id)
      .then(response => console.log('Document successfully deleted!'))
      .then(() => this.getJobs())
      .catch(error => this.getJobs());
  };

  render() {
    return <Jobs jobs={this.state.jobs} handleDelete={this.handleDelete} />;
  }
}

export default withAPI(JobsContainer);
