import React, { Component } from 'react';
import { withFirebase } from '../../../../services/firebase';

import Jobs from '../../../../components/Home/Admin/Jobs';

class JobsContainer extends Component {
  state = { jobs: [] };

  componentDidMount() {
    this.getJobs();
  }

  getJobs = () => {
    const { firebase } = this.props;

    firebase
      .getCompanies()
      .then(querySnapshot => {
        let jobs = [];

        querySnapshot.forEach(doc => {
          const userJobs = doc.data().jobs;

          if (userJobs) {
            userJobs.forEach((job, i) => {
              job.uid = doc.id;
              job.index = i;
            });

            jobs = jobs.concat(userJobs);
          }
        });

        this.setState({ jobs });
      })
      .catch(error => console.log(error));
  };

  handleDelete = e => {
    const { firebase } = this.props;
    const uid = e.target.dataset.uid;
    const index = e.target.dataset.index;

    firebase
      .getUser(uid)
      .then(querySnapshot => {
        const jobs = querySnapshot.data().jobs;
        jobs.splice(index, 1);

        return firebase.deleteJob(uid, jobs);
      })
      .then(() => this.getJobs())
      .catch(error => console.log(error));
  };

  render() {
    return <Jobs jobs={this.state.jobs} handleDelete={this.handleDelete} />;
  }
}

export default withFirebase(JobsContainer);
