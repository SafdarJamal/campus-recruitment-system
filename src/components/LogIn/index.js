import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const LogIn = ({ handleChange, handleSubmit, error }) => {
  return (
    <Container className="col-md-4">
      <Card className="shadow-sm">
        <Card.Header as="h2" className="text-center">
          Log In
        </Card.Header>
        <Card.Body>
          <Alert variant="danger" show={error}>
            {error}
          </Alert>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                name="password"
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Log In
            </Button>
          </Form>
        </Card.Body>
        <Card.Footer className="text-muted text-center">
          Don't have an account? <Link to={ROUTES.SIGN_UP}>Create One</Link>
        </Card.Footer>
      </Card>
    </Container>
  );
};

LogIn.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};

export default LogIn;
