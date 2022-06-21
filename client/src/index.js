import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import Spinner from './components/Spinner';
import API, { APIContext } from './services/api';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './containers/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<Spinner />}>
      <APIContext.Provider value={new API()}>
        <Router>
          <StrictMode>
            <App />
          </StrictMode>
        </Router>
      </APIContext.Provider>
    </PersistGate>
  </Provider>
);
