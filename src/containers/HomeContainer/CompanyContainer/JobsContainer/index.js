import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFirebase } from '../../../../services/firebase';

import Jobs from '../../../../components/Home/Company/Jobs';

class JobsContainer extends Component {
  state = { jobs: [], isProcessing: false, selectedJobId: '' };

  componentDidMount() {
    this.getJobs();
  }

  getJobs = () => {
    const { firebase, user } = this.props;

    firebase
      .getCompanyJobs(user.uid)
      .then(querySnapshot => {
        let jobs = [];

        querySnapshot.forEach(doc => {
          const job = doc.data();

          job.id = doc.id;
          jobs.push(job);
        });

        this.setState({ jobs });
      })
      .catch(error => console.log(error.message));
  };

  handleDelete = e => {
    const { firebase } = this.props;
    const id = e.target.dataset.id;

    this.setState({ isProcessing: true, selectedJobId: id });

    firebase
      .deleteJob(id)
      .then(() => console.log('Job successfully deleted!'))
      .then(() => this.getJobs())
      .catch(error => console.log(error.message));
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

const mapStateToProps = state => {
  return { user: state.user };
};

export default compose(connect(mapStateToProps), withFirebase)(JobsContainer);
