import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import Firebase, { FirebaseContext } from './services/firebase';
import API, { APIContext } from './services/api';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './containers/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
      <FirebaseContext.Provider value={new Firebase()}>
        <APIContext.Provider value={new API()}>
          <Router>
            <App />
          </Router>
        </APIContext.Provider>
      </FirebaseContext.Provider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
