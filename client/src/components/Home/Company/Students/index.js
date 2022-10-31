import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

const Students = ({ students }) => {
  return (
    <Container>
      <Card className="shadow-sm">
        <Card.Header as="h2" className="text-center">
          Students
        </Card.Header>
        <Card.Body>
          <Table bordered hover>
            <thead>
              <tr>
                <th>No.</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

Students.propTypes = {
  students: PropTypes.array.isRequired,
};

export default Students;
