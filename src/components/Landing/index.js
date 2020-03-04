import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Landing = () => {
  return (
    <Container>
      <Jumbotron className="shadow-sm">
        <h1>Landing</h1>
        <p>Not Protected. Anyone can see this.</p>
      </Jumbotron>
    </Container>
  );
};

export default Landing;
