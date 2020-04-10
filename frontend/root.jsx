import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import App from './app';

// testing start
import { getAllLists } from './utils/lists';
// testing end

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
      session: { id: window.currentUser.id },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // testing start
  if (process.env.NODE_ENV !== 'production') {
    window.theStore = store;
    window.getAllLists = getAllLists;
  }
  // testing end

  const root = document.getElementById('root');
  ReactDOM.render(<App store={store} />, root);
});
