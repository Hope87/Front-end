import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import ReduxThunk from "redux-thunk";
import phoneReducer from "./phoneReducer";
// import logger from "redux-logger";

const rootReducer = combineReducers({
  contacts: phoneReducer,
});

const store = configureStore({
  reducer: rootReducer,
  // middleware: [logger, ReduxThunk],
});

export default store;
