import React from 'react';
import { Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from './utils/route_helper';
import Header from './components/header/header_container';
import SignUpContainer from './components/session/sign_up_container';
import LogInContainer from './components/session/log_in_container';
import ListsContainer from './components/lists/lists_container';

class Giftable extends React.Component {
  render() {
    return (
      <>
        <Header />

        <Switch>
          <AuthRoute path='/signup' component={SignUpContainer} />
          <AuthRoute path='/login' component={LogInContainer} />
          <ProtectedRoute path='/lists' component={ListsContainer} />
        </Switch>
      </>
    );
  }
}

export default Giftable;
