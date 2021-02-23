import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import timerReducer from "./timer/timerReducer";
import postsReducer from "./posts/postsReducer";

import ReduxThunk from "redux-thunk";
import logger from "redux-logger";
import throttle from "./middleware/throttle";
import stateValidator from "./middleware/state-validation";

const enhancer = applyMiddleware(throttle, logger, stateValidator, ReduxThunk);

const rootReducer = combineReducers({
  timer: timerReducer,
  posts: postsReducer,
});

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
