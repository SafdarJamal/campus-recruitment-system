import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setUser } from '../../../../actions';
import { withFirebase } from '../../../../services/firebase';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../../../../constants/routes';
import Create from '../../../../components/Home/Company/Jobs/Create';

class CreateContainer extends Component {
  state = { title: '', description: '', error: '' };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { user, firebase, history, setUser } = this.props;
    const { title, description } = this.state;

    const jobPost = {
      title,
      description
    };

    if (user.jobs) {
      user.jobs.push(jobPost);
    } else {
      user.jobs = [];
      user.jobs.push(jobPost);
    }

    firebase
      .postAJob(firebase.auth.currentUser.uid, user)
      .then(() => setUser({ user }))
      .then(() => history.push(ROUTES.JOBS))
      .catch(error => this.setState({ error }));
  };

  render() {
    return (
      <Create
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        error={this.state.error}
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
)(CreateContainer);
