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
          <LinkContainer to={ROUTES.LOG_IN_ADMIN}>
            <Button variant="light" size="lg" block>
              Admin
            </Button>
          </LinkContainer>
          <LinkContainer to={ROUTES.LOG_IN_COMPANY}>
            <Button variant="light" size="lg" block>
              Company
            </Button>
          </LinkContainer>
          <LinkContainer to={ROUTES.LOG_IN_STUDENT}>
            <Button variant="light" size="lg" block>
              Student
            </Button>
          </LinkContainer>
        </Card.Body>
        <Card.Footer className="text-muted text-center">
          Don't have an account? <Link to={ROUTES.SIGN_UP}>Create One</Link>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default LogInType;
