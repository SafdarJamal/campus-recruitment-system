import React, { Component } from 'react';
import { withFirebase } from '../../../../services/firebase';

import Companies from '../../../../components/Home/Admin/Companies';

class CompaniesContainer extends Component {
  state = { companies: [], isProcessing: false, selectedCompanyId: '' };

  componentDidMount() {
    this.getCompanies();
  }

  getCompanies = () => {
    const { firebase } = this.props;

    firebase
      .getCompanies()
      .then(querySnapshot => {
        const companies = [];

        querySnapshot.forEach(doc => {
          const data = doc.data();
          data.id = doc.id;

          companies.push(data);
        });

        this.setState({ companies });
      })
      .catch(error => console.log(error.message));
  };

  handleDelete = e => {
    const { firebase } = this.props;
    const id = e.target.dataset.id;

    this.setState({ isProcessing: true, selectedCompanyId: id });

    firebase
      .deleteUser(id)
      .then(() => console.log('Company successfully deleted!'))
      .then(() => this.getCompanies())
      .catch(error => console.log(error.message));
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

export default withFirebase(CompaniesContainer);
