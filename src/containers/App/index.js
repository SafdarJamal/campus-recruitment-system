import React from 'react';

import ErrorBoundary from '../../components/ErrorBoundary';
import HeaderContainer from '../HeaderContainer';
import Routes from '../../routes';
import Footer from '../../components/Footer';

const App = () => {
  return (
    <ErrorBoundary>
      <HeaderContainer />
      <Routes />
      <Footer />
    </ErrorBoundary>
  );
};

export default App;
