import {
  SESSION_ERRORS_SUCCESS,
  CREATE_NEW_USER_SUCCESS,
  LOG_IN_USER_SUCCESS
} from '../actions/session';

const sessionErrorsReducer = (prevState = [], action) => {
  Object.freeze(prevState);

  switch (action.type) {
    case SESSION_ERRORS_SUCCESS:
      return action.errors;
    case CREATE_NEW_USER_SUCCESS:
    case LOG_IN_USER_SUCCESS:
      return [];
    default:
      return prevState;
  }
};

export default sessionErrorsReducer;
