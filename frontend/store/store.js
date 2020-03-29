import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers/root";
import rootSagas from "../sagas/root";

const configureStore = (preloadedState = {}) => {
  const sagaMiddleware = createSagaMiddleware();

  let store;
  if (process.env.NODE_ENV === "production") {
    store = createStore(
      rootReducer,
      preloadedState,
      applyMiddleware(sagaMiddleware)
    );
  } else {
    store = createStore(
      rootReducer,
      preloadedState,
      applyMiddleware(sagaMiddleware, logger)
    );
  }

  sagaMiddleware.run(rootSagas);

  return store;
};

export default configureStore;
