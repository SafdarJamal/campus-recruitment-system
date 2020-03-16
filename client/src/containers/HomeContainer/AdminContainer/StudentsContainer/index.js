import React, { Component } from 'react';
import { withAPI } from '../../../../services/api';

import Students from '../../../../components/Home/Admin/Students';

class StudentsContainer extends Component {
  state = { students: [] };

  componentDidMount() {
    this.getStudents();
  }

  getStudents = () => {
    const { api } = this.props;

    api
      .getStudents()
      .then(response => {
        this.setState({ students: response.data });
      })
      .catch(error => console.log(error.message));
  };

  handleDelete = e => {
    const { api } = this.props;

    api
      .deleteStudent(e.target.dataset.id)
      .then(response => console.log('Document successfully deleted!'))
      .then(() => this.getStudents())
      .catch(error => this.getStudents());
  };

  render() {
    return (
      <Students
        students={this.state.students}
        handleDelete={this.handleDelete}
      />
    );
  }
}

export default withAPI(StudentsContainer);
