import React, { Component } from 'react';
import { compose } from 'redux';
import { withAPI } from '../../../../../services/api';
import withRouter from '../../../../../services/withRouter';
import * as ROUTES from '../../../../../constants/routes';

import New from '../../../../../components/Home/Company/Jobs/New';

class NewContainer extends Component {
  state = { title: '', description: '', isProcessing: false, error: null };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isProcessing: true });

    const { api, navigate } = this.props;
    const { title, description } = this.state;

    const data = {
      title,
      description,
    };

    api
      .postJob(data)
      .then(() => navigate(ROUTES.JOBS))
      .catch(error =>
        this.setState({
          isProcessing: false,
          error: error.response.data.message,
        })
      );
  };

  dismissAlert = () => this.setState({ error: null });

  render() {
    const { title, description, isProcessing, error } = this.state;

    return (
      <New
        title={title}
        description={description}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        isProcessing={isProcessing}
        error={error}
        dismissAlert={this.dismissAlert}
      />
    );
  }
}

export default compose(withAPI, withRouter)(NewContainer);
