import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const NotFound = () => {
  return (
    <Container className="col-md-4">
      <Card className="shadow-sm text-center">
        <Card.Body>
          <h1>404 - Not Found</h1>
          <br />
          <Link to={ROUTES.LANDING} style={{ textDecoration: 'none' }}>
            <Button variant="success" size="lg">
              Go to Home
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NotFound;
