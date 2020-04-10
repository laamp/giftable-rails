import { combineReducers } from 'redux';
import usersReducer from './users';
import listsReducer from './lists';

const entitiesReducer = combineReducers({
  users: usersReducer,
  lists: listsReducer
});

export default entitiesReducer;
