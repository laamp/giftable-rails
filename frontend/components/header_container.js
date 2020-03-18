import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../actions/session';
import Header from './header';

const mapStateToProps = ({ entities, session }) => ({
  currentUser: entities.users[session.id]
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
