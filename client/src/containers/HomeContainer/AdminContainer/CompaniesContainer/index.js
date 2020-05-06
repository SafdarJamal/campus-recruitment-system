import React, { Component } from 'react';
import { withAPI } from '../../../../services/api';

import Companies from '../../../../components/Home/Admin/Companies';

class CompaniesContainer extends Component {
  state = { companies: [], isProcessing: false, selectedCompanyId: '' };

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
    const id = e.target.dataset.id;

    this.setState({ isProcessing: true, selectedCompanyId: id });

    api
      .deleteCompany(id)
      .then(() => this.getCompanies())
      .catch(error => console.log(error.response.data.message));
  };

  render() {
    const { companies, isProcessing, selectedCompanyId } = this.state;

    return (
      <Companies
        companies={companies}
        handleDelete={this.handleDelete}
        isProcessing={isProcessing}
        selectedCompanyId={selectedCompanyId}
      />
    );
  }
}

export default withAPI(CompaniesContainer);
