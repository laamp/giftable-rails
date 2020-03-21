import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import App from './app';

import { logIn, logOut } from './actions/session';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  // testing start
  if (process.env.NODE_ENV !== 'production') {
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.logIn = logIn;
    window.logOut = logOut;
  }
  // testing end

  const root = document.getElementById('root');
  ReactDOM.render(<App store={store} />, root);
});
