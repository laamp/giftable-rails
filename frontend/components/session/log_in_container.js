import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';

import { logIn } from '../../actions/session';

const mapStateToProps = ({ errors: { session } }) => ({
  errors: session,
  formType: 'login'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(logIn(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
