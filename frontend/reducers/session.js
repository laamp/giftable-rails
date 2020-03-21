import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session';

const noUser = Object.freeze({ id: null });

const sessionReducer = (prevState = noUser, action) => {
  Object.freeze(prevState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: action.currentUser.id };
    case LOGOUT_CURRENT_USER:
      return noUser;
    default:
      return prevState;
  }
};

export default sessionReducer;
