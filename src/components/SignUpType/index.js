import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import * as ROUTES from '../../constants/routes';

const SignUpType = () => {
  return (
    <Container className="col-md-4">
      <Card className="shadow-sm">
        <Card.Header as="h2" className="text-center">
          Sign Up As
        </Card.Header>
        <Card.Body>
          <LinkContainer to={ROUTES.SIGN_UP_COMPANY}>
            <Button variant="light" size="lg" block>
              Company
            </Button>
          </LinkContainer>
          <LinkContainer to={ROUTES.SIGN_UP_STUDENT}>
            <Button variant="light" size="lg" block>
              Student
            </Button>
          </LinkContainer>
        </Card.Body>
        <Card.Footer className="text-muted text-center">
          Already have an account? <Link to={ROUTES.LOG_IN}>Log In</Link>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default SignUpType;
