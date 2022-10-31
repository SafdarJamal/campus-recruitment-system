import React from 'react';
import PropTypes from 'prop-types';

import HeaderContainer from '../../containers/HeaderContainer';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <>
      <HeaderContainer />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
