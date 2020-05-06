import React, { Suspense } from 'react';

import ErrorBoundary from '../../components/ErrorBoundary';
import HeaderContainer from '../HeaderContainer';
import Spinner from '../../components/Spinner';
import Routes from '../../routes';
import Footer from '../../components/Footer';

const App = () => {
  return (
    <ErrorBoundary>
      <HeaderContainer />
      <Suspense fallback={<Spinner />}>
        <Routes />
      </Suspense>
      <Footer />
    </ErrorBoundary>
  );
};

export default App;
