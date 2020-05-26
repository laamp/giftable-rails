import { connect } from 'react-redux';
import SessionForm from './session_form';

import { logInUser } from '../../actions/session';

const mapStateToProps = ({ errors: { session } }) => ({
  errors: session,
  formType: 'login',
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(logInUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
