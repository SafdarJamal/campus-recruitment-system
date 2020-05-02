import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../images/logo.svg';
import { LinkContainer } from 'react-router-bootstrap';
import * as ROUTES from '../../constants/routes';

import LogOutContainer from '../../containers/LogOutContainer';

const Header = ({ links, isAuthenticated }) => {
  return (
    <header style={{ paddingBottom: 100 }}>
      <Navbar className="shadow-sm" bg="dark" variant="dark" fixed="top">
        <LinkContainer to={ROUTES.LANDING}>
          <Navbar.Brand>
            <img
              className="d-inline-block align-top"
              src={logo}
              width="30"
              height="30"
              alt="CRS"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Nav className="mr-auto">
          {links.map((link, i) => (
            <LinkContainer key={i} to={link.path} exact>
              <Nav.Link>{link.text}</Nav.Link>
            </LinkContainer>
          ))}
        </Nav>
        {isAuthenticated && <LogOutContainer />}
      </Navbar>
    </header>
  );
};

Header.propTypes = {
  links: PropTypes.array.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

export default Header;
