import React, { Fragment } from 'react';
import HeaderContainer from '../HeaderContainer';
import Routes from '../../routes';
import Footer from '../../components/Footer';

const App = () => {
  return (
    <Fragment>
      <HeaderContainer />
      <Routes />
      <Footer />
    </Fragment>
  );
};

export default App;
