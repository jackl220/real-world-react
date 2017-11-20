import { createStore, applyMiddleware, combineReducers, compose } from "redux";

import { promiseMiddleware, localStorageMiddleware } from "./middleware";

import auth from "./reducers/auth";
import common from "./reducers/common";
import home from "./reducers/home";
import settings from "./reducers/settings";
import article from "./reducers/article";
import editor from "./reducers/editor";

const reducer = combineReducers({
  auth,
  common,
  home,
  settings,
  article,
  editor
});

const store = createStore(
  reducer,
  compose(
    applyMiddleware(promiseMiddleware, localStorageMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
