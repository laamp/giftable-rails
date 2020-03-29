import {
  CREATE_NEW_USER_SUCCESS,
  LOG_IN_USER_SUCCESS,
  LOG_OUT_USER_SUCCESS
} from '../actions/session';

const noUser = Object.freeze({ id: null });

const sessionReducer = (prevState = noUser, action) => {
  Object.freeze(prevState);

  switch (action.type) {
    case CREATE_NEW_USER_SUCCESS:
    case LOG_IN_USER_SUCCESS:
      return { id: action.currentUser.id };
    case LOG_OUT_USER_SUCCESS:
      return noUser;
    default:
      return prevState;
  }
};

export default sessionReducer;
