import React, { Component } from 'react';
import { withFirebase } from '../../../../services/firebase';

import Companies from '../../../../components/Home/Admin/Companies';

class CompaniesContainer extends Component {
  state = { companies: [] };

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

    firebase
      .deleteUser(e.target.dataset.id)
      .then(() => console.log('Company successfully deleted!'))
      .then(() => this.getCompanies())
      .catch(error => console.log(error.message));
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

export default withFirebase(CompaniesContainer);
