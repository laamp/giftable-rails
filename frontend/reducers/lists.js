import { GET_ALL_LISTS_SUCCESS } from '../actions/lists';

const listsReducer = (prevState = {}, action) => {
  Object.freeze(prevState);

  switch (action.type) {
    case GET_ALL_LISTS_SUCCESS:
      return { lists: 'LISTS GO HERE' };
    default:
      return prevState;
  }
};

export default listsReducer;
