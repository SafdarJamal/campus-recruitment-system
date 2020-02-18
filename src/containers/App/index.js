import React, { Fragment } from 'react';
import Header from '../../components/Header';
import Routes from '../../routes';
import Footer from '../../components/Footer';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes />
      <Footer />
    </Fragment>
  );
};

export default App;
