import React, { Component } from 'react';
import { compose } from 'redux';
import { withAPI } from '../../../../services/api';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../../../../constants/routes';

import New from '../../../../components/Home/Company/Jobs/New';

class NewContainer extends Component {
  state = { title: '', description: '', error: null };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { api, history } = this.props;
    const { title, description } = this.state;

    const data = {
      title,
      description
    };

    api
      .postJob(data)
      .then(response => history.push(ROUTES.JOBS))
      .catch(error => this.setState({ error: error.response.data.message }));
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

export default compose(withAPI, withRouter)(NewContainer);
