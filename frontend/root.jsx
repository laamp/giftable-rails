import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import App from './app';

// testing start
import { logIn, logOut } from './actions/session';
// testing end

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

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
