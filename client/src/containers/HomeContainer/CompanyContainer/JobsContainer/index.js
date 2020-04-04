import React, { Component } from 'react';
import { withAPI } from '../../../../services/api';

import Jobs from '../../../../components/Home/Company/Jobs';

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
        const { data } = response;

        data.forEach(job => {
          const ids = job.applicants;
          const promises = ids.map(id => api.getProfileById(id));

          Promise.all(promises)
            .then(data => (job.applicants = data.map(profile => profile.data)))
            .catch(error => console.log(error.response.data.message));
        });

        this.setState({ jobs: data });
      })
      .catch(error => console.log(error.response.data.message));
  };

  handleDelete = e => {
    const { api } = this.props;

    api
      .deleteJob(e.target.dataset.id)
      .then(() => this.getJobs())
      .catch(error => console.log(error.response.data.message));
  };

  render() {
    return <Jobs jobs={this.state.jobs} handleDelete={this.handleDelete} />;
  }
}

export default withAPI(JobsContainer);
