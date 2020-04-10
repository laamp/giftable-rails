import { GET_ALL_LISTS_SUCCESS, LIST_ERRORS_SUCCESS } from '../actions/lists';

const listErrorsReducer = (prevState = [], action) => {
  Object.freeze(prevState);

  switch (action.type) {
    case LIST_ERRORS_SUCCESS:
      return action.errors;
    case GET_ALL_LISTS_SUCCESS:
      return [];
    default:
      return prevState;
  }
};

export default listErrorsReducer;
