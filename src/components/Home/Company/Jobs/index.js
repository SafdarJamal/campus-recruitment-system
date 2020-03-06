import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../../../../constants/routes';

const Jobs = ({ jobs, handleDelete }) => {
  const history = useHistory();

  return (
    <Container>
      <Card className="shadow-sm">
        <Card.Header as="h2" className="text-center">
          Jobs
        </Card.Header>
        <Card.Body>
          <Button
            className="mb-4"
            variant="success"
            onClick={() => history.push(ROUTES.JOBS_NEW)}
          >
            Post New Job
          </Button>
          <Table bordered hover>
            <thead>
              <tr>
                <th>No.</th>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{job.title}</td>
                  <td>{job.description}</td>
                  <td>
                    <Button
                      variant="danger"
                      data-index={i}
                      onClick={handleDelete}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

Jobs.propTypes = {
  jobs: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default Jobs;
