import React from 'react';
import ReactDOM from 'react-dom';

import { signUp, logIn, logOut } from './utils/session';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Hai</h1>, root);
});
