import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Landing = () => {
  return (
    <Container>
      <Jumbotron className="shadow-sm">
        <h1>Hello, World!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Link to={ROUTES.LOG_IN}>
            <Button variant="success">Get Started</Button>
          </Link>
        </p>
      </Jumbotron>
    </Container>
  );
};

export default Landing;
