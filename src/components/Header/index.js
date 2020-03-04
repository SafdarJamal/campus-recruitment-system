import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import * as ROUTES from '../../constants/routes';
import styles from './style.module.css';

import LogOutContainer from '../../containers/LogOutContainer';

const Header = ({ links, isAuthenticated }) => {
  return (
    <header className={styles.header}>
      <Navbar className="shadow" bg="dark" variant="dark" fixed="top">
        <LinkContainer to={ROUTES.LANDING}>
          <Navbar.Brand>CRS</Navbar.Brand>
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
