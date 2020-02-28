import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setUser } from '../../../../actions';
import { withFirebase } from '../../../../services/firebase';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../../../../constants/routes';

import Edit from '../../../../components/Home/Admin/Profile/Edit';

class EditContainer extends Component {
  state = {
    firstName: '',
    lastName: '',
    error: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { user, firebase, history, setUser } = this.props;
    const { firstName, lastName } = this.state;

    const newData = {
      firstName,
      lastName
    };

    const userData = { ...user, ...newData };

    firebase
      .updateProfile(firebase.auth.currentUser.uid, userData)
      .then(() => setUser({ user: userData }))
      .then(() => history.push(ROUTES.PROFILE))
      .catch(error => this.setState({ error }));
  };

  render() {
    const { user } = this.props;

    return (
      <Edit
        user={user}
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
)(EditContainer);
