import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

const Companies = ({ companies }) => {
  return (
    <Container>
      <Card className="shadow-sm">
        <Card.Header as="h2" className="text-center">
          Companies
        </Card.Header>
        <Card.Body>
          <Table bordered hover>
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{company.companyName}</td>
                  <td>{company.companyEmail}</td>
                  <td>{company.companyPhone}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

Companies.propTypes = {
  companies: PropTypes.array.isRequired,
};

export default Companies;
