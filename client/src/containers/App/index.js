import React, { Suspense } from 'react';

import ErrorBoundary from '../../components/ErrorBoundary';
import Layout from '../../components/Layout';
import Spinner from '../../components/Spinner';
import Routes from '../../routes';

const App = () => {
  return (
    <ErrorBoundary>
      <Layout>
        <Suspense fallback={<Spinner />}>
          <Routes />
        </Suspense>
      </Layout>
    </ErrorBoundary>
  );
};

export default App;
