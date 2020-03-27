import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setUser } from '../../../../actions';
import { withAPI } from '../../../../services/api';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../../../../constants/routes';

import Edit from '../../../../components/Home/Admin/Profile/Edit';

class EditContainer extends Component {
  state = {
    firstName: this.props.user.firstName,
    lastName: this.props.user.lastName,
    error: null
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { api, setUser, history } = this.props;
    const { firstName, lastName } = this.state;

    const data = {
      firstName,
      lastName
    };

    api
      .updateProfile(data)
      .then(response => setUser({ user: response.data }))
      .then(() => history.push(ROUTES.PROFILE))
      .catch(error =>
        api
          .getProfile()
          .then(response => setUser({ user: response.data }))
          .then(() => history.push(ROUTES.PROFILE))
          .catch(error => this.setState({ error: error.message }))
      );
  };

  render() {
    const { firstName, lastName, error } = this.state;

    return (
      <Edit
        firstName={firstName}
        lastName={lastName}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        error={error}
      />
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default compose(
  connect(mapStateToProps, { setUser }),
  withAPI,
  withRouter
)(EditContainer);