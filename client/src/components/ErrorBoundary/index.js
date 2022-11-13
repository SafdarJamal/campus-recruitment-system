import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError)
      return (
        <Container className="col-md-4" style={{ paddingTop: 100 }}>
          <Card className="shadow-sm text-center">
            <Card.Body>
              <h1>Something Went Wrong</h1>
              <br />
              <Button
                variant="success"
                size="lg"
                onClick={() => window.location.reload()}
              >
                Reload
              </Button>
            </Card.Body>
          </Card>
        </Container>
      );

    return this.props.children;
  }
}

export default ErrorBoundary;
