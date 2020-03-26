import React, { Component } from 'react';
import { withFirebase } from '../../../../services/firebase';

import Jobs from '../../../../components/Home/Student/Jobs';

class JobsContainer extends Component {
  state = { jobs: [] };

  componentDidMount() {
    this.getJobs();
  }

  getJobs = () => {
    const { firebase } = this.props;

    firebase
      .getJobs()
      .then(querySnapshot => {
        let jobs = [];

        querySnapshot.forEach(doc => {
          const job = doc.data();
          jobs.push(job);
        });

        this.setState({ jobs });
      })
      .catch(error => console.log(error.message));
  };

  render() {
    return <Jobs jobs={this.state.jobs} />;
  }
}

export default withFirebase(JobsContainer);
