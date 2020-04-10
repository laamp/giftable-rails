import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors';
import listErrorsReducer from './list_errors';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  lists: listErrorsReducer,
});

export default errorsReducer;
