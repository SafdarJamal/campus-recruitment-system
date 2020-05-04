import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFirebase } from '../../../../../services/firebase';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../../../../../constants/routes';

import New from '../../../../../components/Home/Company/Jobs/New';

class NewContainer extends Component {
  state = { title: '', description: '', error: null };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { firebase, user, history } = this.props;
    const { title, description } = this.state;

    const data = {
      uid: user.uid,
      title,
      description
    };

    firebase
      .postJob(data)
      .then(() => console.log('Job successfully posted!'))
      .then(() => history.push(ROUTES.JOBS))
      .catch(error => this.setState({ error: error.message }));
  };

  render() {
    const { title, description, error } = this.state;

    return (
      <New
        title={title}
        description={description}
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
  connect(mapStateToProps),
  withFirebase,
  withRouter
)(NewContainer);
