export const GET_ALL_LISTS_REQUEST = 'GET_ALL_LISTS_REQUEST';
export const GET_ALL_LISTS_SUCCESS = 'GET_ALL_LISTS_SUCCESS';
export const getAllLists = (id) => ({
  type: GET_ALL_LISTS_REQUEST,
  payload: { id },
});

export const LIST_ERRORS_REQUEST = 'LIST_ERRORS_REQUEST';
export const LIST_ERRORS_SUCCESS = 'LIST_ERRORS_SUCCESS';
export const listErrors = (errors) => ({
  type: LIST_ERRORS_REQUEST,
  payload: { errors },
});

export const CREATE_NEW_LIST_REQUEST = 'CREATE_NEW_LIST_REQUEST';
export const CREATE_NEW_LIST_SUCCESS = 'CREATE_NEW_LIST_SUCCESS';
export const createNewList = (id, list) => ({
  type: CREATE_NEW_LIST_REQUEST,
  payload: { id, list },
});
