import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withAPI } from '../../../../services/api';

import Jobs from '../../../../components/Home/Student/Jobs';

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

  handleApply = e => {
    const { api } = this.props;
    const id = e.target.dataset.id;

    this.setState({ isProcessing: true, selectedJobId: id });

    api
      .applyToJob(id)
      .then(() => this.getJobs())
      .catch(error => console.log(error.response.data.message));
  };

  render() {
    const { jobs, isProcessing, selectedJobId } = this.state;

    return (
      <Jobs
        _id={this.props._id}
        jobs={jobs}
        handleApply={this.handleApply}
        isProcessing={isProcessing}
        selectedJobId={selectedJobId}
      />
    );
  }
}

const mapStateToProps = state => {
  return { _id: state.user._id };
};

export default compose(connect(mapStateToProps), withAPI)(JobsContainer);
