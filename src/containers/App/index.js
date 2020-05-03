import React, { Suspense } from 'react';

import ErrorBoundary from '../../components/ErrorBoundary';
import HeaderContainer from '../HeaderContainer';
import Loader from '../../components/Loader';
import Routes from '../../routes';
import Footer from '../../components/Footer';

const App = () => {
  return (
    <ErrorBoundary>
      <HeaderContainer />
      <Suspense fallback={<Loader />}>
        <Routes />
      </Suspense>
      <Footer />
    </ErrorBoundary>
  );
};

export default App;
