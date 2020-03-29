import {
  CREATE_NEW_USER_SUCCESS,
  LOG_IN_USER_SUCCESS
} from '../actions/session';

const usersReducer = (prevState = {}, action) => {
  Object.freeze(prevState);

  switch (action.type) {
    case CREATE_NEW_USER_SUCCESS:
    case LOG_IN_USER_SUCCESS:
      return Object.assign({}, prevState, {
        [action.currentUser.id]: action.currentUser
      });
    default:
      return prevState;
  }
};

export default usersReducer;
