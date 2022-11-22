import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import { useNavigate } from 'react-router-dom';
import * as ROUTES from '../../../../constants/routes';

const Jobs = ({ jobs, handleDelete, isProcessing, selectedJobId }) => {
  const [eventKey, setEventKey] = useState(null);
  const navigate = useNavigate();

  const handleChange = value => {
    if (value === eventKey) return setEventKey(null);
    setEventKey(value);
  };

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
            onClick={() => navigate(ROUTES.JOBS_NEW)}
          >
            Post New Job
          </Button>
          <Table bordered>
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
                <Fragment key={i}>
                  <tr>
                    <td>{i + 1}</td>
                    <td>{job.title}</td>
                    <td>{job.description}</td>
                    <td>
                      <Button
                        className="me-2"
                        variant="success"
                        onClick={() => handleChange(i + 1)}
                      >
                        See Applicants
                      </Button>
                      <Button
                        variant="danger"
                        data-id={job._id}
                        onClick={handleDelete}
                        disabled={isProcessing && job._id === selectedJobId}
                      >
                        {isProcessing && job._id === selectedJobId
                          ? 'Deleting...'
                          : 'Delete'}
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4}>
                      <Accordion activeKey={eventKey}>
                        <Accordion.Collapse eventKey={i + 1}>
                          <Table size="sm" hover>
                            <thead>
                              <tr>
                                <th>No.</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                              </tr>
                            </thead>
                            <tbody>
                              {job.applicants.map((applicant, i) => (
                                <tr key={i}>
                                  <td>{i + 1}</td>
                                  <td>{applicant.firstName}</td>
                                  <td>{applicant.lastName}</td>
                                  <td>{applicant.phone}</td>
                                  <td>{applicant.email}</td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        </Accordion.Collapse>
                      </Accordion>
                    </td>
                  </tr>
                </Fragment>
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
  handleDelete: PropTypes.func.isRequired,
  isProcessing: PropTypes.bool.isRequired,
  selectedJobId: PropTypes.string.isRequired,
};

export default Jobs;
