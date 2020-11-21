// Dependencies 
import React from 'react';

import './index.css';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
import App from './App';

//Redux Store
import configureStore from './store';
import { restoreCSRF, fetch } from './store/csrf';
import * as sessionActions from './store/actions/session';

//Set initial state
const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  restoreCSRF();

  window.csrfFetch = fetch;
  window.store = store;
  window.sessionActions = sessionActions;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
