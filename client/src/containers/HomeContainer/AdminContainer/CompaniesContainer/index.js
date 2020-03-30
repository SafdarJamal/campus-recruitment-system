import React, { Component } from 'react';
import { withAPI } from '../../../../services/api';

import Companies from '../../../../components/Home/Admin/Companies';

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

  handleDelete = e => {
    const { api } = this.props;

    api
      .deleteCompany(e.target.dataset.id)
      .then(response => console.log('Document successfully deleted!'))
      .then(() => this.getCompanies())
      .catch(error => console.log(error.response.data.message));
  };

  render() {
    return (
      <Companies
        companies={this.state.companies}
        handleDelete={this.handleDelete}
      />
    );
  }
}

export default withAPI(CompaniesContainer);
