import { connect } from 'react-redux';
import Header from './header';

import { logOutUser } from '../../actions/session';

const mapStateToProps = ({ entities, session }) => ({
  currentUser: entities.users[session.id],
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
