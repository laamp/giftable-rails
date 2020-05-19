import { connect } from 'react-redux';
import SessionForm from './session_form';

import { createNewUser } from '../../actions/session';

const mapStateToProps = ({ errors: { session } }) => ({
  errors: session,
  formType: 'signup',
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(createNewUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
