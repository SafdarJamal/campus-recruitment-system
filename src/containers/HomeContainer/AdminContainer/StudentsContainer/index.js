import React, { Component } from 'react';
import { withFirebase } from '../../../../services/firebase';

import Students from '../../../../components/Home/Admin/Students';

class StudentsContainer extends Component {
  state = { students: [] };

  componentDidMount() {
    this.getStudents();
  }

  getStudents = () => {
    const { firebase } = this.props;

    firebase
      .getStudents()
      .then(querySnapshot => {
        const students = [];

        querySnapshot.forEach(doc => {
          const data = doc.data();
          data.id = doc.id;

          students.push(data);
        });

        this.setState({ students });
      })
      .catch(error => console.log(error));
  };

  handleDelete = e => {
    const { firebase } = this.props;

    firebase
      .deleteAStudent(e.target.dataset.id)
      .then(() => console.log('Document successfully deleted!'))
      .then(() => this.getStudents())
      .catch(error => console.log(error));
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

export default withFirebase(StudentsContainer);
