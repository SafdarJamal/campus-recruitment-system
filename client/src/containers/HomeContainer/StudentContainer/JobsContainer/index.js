import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
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
      .catch(error => console.log(error.response.data.message));
  };

  handleApply = e => {
    const { api } = this.props;

    api
      .applyToJob(e.target.dataset.id)
      .then(() => this.getJobs())
      .catch(error => console.log(error.response.data.message));
  };

  render() {
    return (
      <Jobs
        _id={this.props._id}
        jobs={this.state.jobs}
        handleApply={this.handleApply}
      />
    );
  }
}

const mapStateToProps = state => {
  return { _id: state.user._id };
};

export default compose(connect(mapStateToProps), withAPI)(JobsContainer);
