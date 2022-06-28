import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import * as ROUTES from '../../constants/routes';

const LogInType = () => {
  return (
    <Container className="col-md-4">
      <Card className="shadow-sm">
        <Card.Header as="h2" className="text-center">
          Log In As
        </Card.Header>
        <Card.Body>
          <div className="d-grid gap-2">
            <LinkContainer to={ROUTES.LOG_IN_ADMIN}>
              <Button variant="light" size="lg">
                Admin
              </Button>
            </LinkContainer>
            <LinkContainer to={ROUTES.LOG_IN_COMPANY}>
              <Button variant="light" size="lg">
                Company
              </Button>
            </LinkContainer>
            <LinkContainer to={ROUTES.LOG_IN_STUDENT}>
              <Button variant="light" size="lg">
                Student
              </Button>
            </LinkContainer>
          </div>
        </Card.Body>
        <Card.Footer className="text-muted text-center">
          Don't have an account? <Link to={ROUTES.SIGN_UP}>Create One</Link>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default LogInType;
