import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const SignUp = ({
  firstName,
  lastName,
  email,
  password,
  handleChange,
  handleSubmit,
  error
}) => {
  return (
    <Container className="col-md-4">
      <Card className="shadow-sm">
        <Card.Header as="h2" className="text-center">
          Sign Up
        </Card.Header>
        <Card.Body>
          <Alert variant="danger" show={error}>
            {error}
          </Alert>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
        <Card.Footer className="text-muted text-center">
          Already have an account? <Link to={ROUTES.LOG_IN}>Log In</Link>
        </Card.Footer>
      </Card>
    </Container>
  );
};

SignUp.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default SignUp;
