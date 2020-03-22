import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/header/header_container';
import SignUpContainer from './components/session/sign_up_container';
import LogInContainer from './components/session/log_in_container';

class Giftable extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Route path='/signup' component={SignUpContainer} />
        <Route path='/login' component={LogInContainer} />
      </>
    );
  }
}

export default Giftable;
