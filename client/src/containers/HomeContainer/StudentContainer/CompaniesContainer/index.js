import React, { Component } from 'react';
import { withAPI } from '../../../../services/api';

import Companies from '../../../../components/Home/Student/Companies';

class CompaniesContainer extends Component {
  state = { companies: [] };

  componentDidMount() {
    this.getCompanies();
  }

  getCompanies = () => {
    const { api } = this.props;

    api
      .getCompanies()
      .then(response => {
        this.setState({ companies: response.data });
      })
      .catch(error => console.log(error.response.data.message));
  };

  render() {
    return <Companies companies={this.state.companies} />;
  }
}

export default withAPI(CompaniesContainer);
