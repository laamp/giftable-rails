import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';

import { signUp } from '../../actions/session';

const mapStateToProps = ({ errors: { session } }) => ({
  errors: session,
  formType: 'signup'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(signUp(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
