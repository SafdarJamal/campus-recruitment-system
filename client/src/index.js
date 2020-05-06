import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import Spinner from './components/Spinner';
import API, { APIContext } from './services/api';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './containers/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
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
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
