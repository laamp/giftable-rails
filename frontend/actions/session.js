export const CREATE_NEW_USER_REQUEST = 'CREATE_NEW_USER_REQUEST';
export const CREATE_NEW_USER_SUCCESS = 'CREATE_NEW_USER_SUCCESS';
export const createNewUser = user => ({
  type: CREATE_NEW_USER_REQUEST,
  payload: { user },
});

export const LOG_IN_USER_REQUEST = 'LOG_IN_USER_REQUEST';
export const LOG_IN_USER_SUCCESS = 'LOG_IN_USER_SUCCESS';
export const logInUser = user => ({
  type: LOG_IN_USER_REQUEST,
  payload: { user },
});

export const LOG_OUT_USER_REQUEST = 'LOG_OUT_USER_REQUEST';
export const LOG_OUT_USER_SUCCESS = 'LOG_OUT_USER_SUCCESS';
export const logOutUser = () => ({
  type: LOG_OUT_USER_REQUEST,
});

export const SESSION_ERRORS_REQUEST = 'SESSION_ERRORS_REQUEST';
export const SESSION_ERRORS_SUCCESS = 'SESSION_ERRORS_SUCCESS';
export const sessionErrors = errors => ({
  type: SESSION_ERRORS_REQUEST,
  payload: { errors },
});
