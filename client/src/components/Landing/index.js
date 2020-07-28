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
        <h1>Recruit faster with CRS!</h1>
        <p>
          Campus Recruitment System (CRS) is a recruiting app that makes the
          hiring process faster and simpler so that your team can hire the best
          people, faster.
        </p>
        <hr />
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
