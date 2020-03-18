import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import Giftable from './giftable';

const App = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Giftable />
    </HashRouter>
  </Provider>
);

export default App;
