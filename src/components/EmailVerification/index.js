import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const EmailVerification = ({ handleSubmit, success, error }) => {
  return (
    <Container className="col-md-4">
      <Card className="shadow-sm text-center">
        <Card.Header as="h2">Email Verification</Card.Header>
        <Card.Body>
          <Alert variant="success" show={success}>
            Verification link has been send to your provided email address,
            check you mailbox.
          </Alert>
          <Alert variant="danger" show={error}>
            {error}
          </Alert>
          <Form onSubmit={handleSubmit}>
            <p className="lead">
              Check your inbox to verify your email
              <br />
              Click the link in the email and you'll be good to go.
            </p>
            <Button variant="success" size="lg" block type="submit">
              Resend
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

EmailVerification.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  success: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default EmailVerification;
