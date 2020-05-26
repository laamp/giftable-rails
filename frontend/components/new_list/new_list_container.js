import { connect } from 'react-redux';
import NewList from './new_list';

import { createNewList } from '../../actions/lists';

const mapStateToProps = ({ session: { id }, errors: { lists } }) => ({
  currentUserId: id,
  errors: lists,
});

const mapDispatchToProps = (dispatch) => ({
  createNewList: (id, list) => dispatch(createNewList(id, list)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewList);
