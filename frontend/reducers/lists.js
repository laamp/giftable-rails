import {
  GET_ALL_LISTS_SUCCESS,
  CREATE_NEW_LIST_SUCCESS,
} from '../actions/lists';

const listsReducer = (prevState = {}, action) => {
  Object.freeze(prevState);

  switch (action.type) {
    case GET_ALL_LISTS_SUCCESS:
      return action.lists;
    case CREATE_NEW_LIST_SUCCESS:
      return { ...prevState, ...action.list };
    default:
      return prevState;
  }
};

export default listsReducer;
