import { connect } from 'react-redux';
import Lists from './lists';

import { getAllLists } from '../../actions/lists';

const mapStateToProps = ({ session: { id }, entities: { lists } }) => ({
  currentUserId: id,
  lists,
});

const mapDispatchToProps = dispatch => ({
  getAllLists: id => dispatch(getAllLists(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
