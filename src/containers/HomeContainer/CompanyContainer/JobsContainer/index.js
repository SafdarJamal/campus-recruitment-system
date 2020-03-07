import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setUser } from '../../../../store/actions';
import { withFirebase } from '../../../../services/firebase';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../../../../constants/routes';

import Jobs from '../../../../components/Home/Company/Jobs';

class JobsContainer extends Component {
  handleDelete = e => {
    const { user, firebase, setUser, history } = this.props;

    user.jobs.splice(e.target.dataset.index, 1);

    firebase
      .deleteJob(firebase.auth.currentUser.uid, user.jobs)
      .then(() => setUser({ user }))
      .then(() => history.push(ROUTES.JOBS))
      .catch(error => console.log(error));
  };

  render() {
    const { user } = this.props;

    return (
      <Jobs
        jobs={user.jobs ? user.jobs : []}
        handleDelete={this.handleDelete}
      />
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default compose(
  connect(mapStateToProps, { setUser }),
  withFirebase,
  withRouter
)(JobsContainer);
