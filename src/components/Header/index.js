import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import LogOutContainer from '../../containers/LogOutContainer';

const Header = ({ links, isAuthenticated }) => {
  return (
    <header>
      <nav>
        <ul>
          {links.map((link, i) => (
            <li key={i}>
              <Link to={link.path}>{link.text}</Link>
            </li>
          ))}
          {isAuthenticated && (
            <li>
              <LogOutContainer />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  links: PropTypes.array.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

export default Header;
