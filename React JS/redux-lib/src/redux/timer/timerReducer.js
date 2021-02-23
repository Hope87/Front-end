import { combineReducers } from "redux";
import { Type } from "./timerActions";

const valueReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case Type.INCREMENT:
      return state + payload;

    case Type.DECREMENT:
      return state - payload;

    default:
      return state;
  }
};

const stepReducer = (state = 0, { payload, type }) => {
  switch (type) {
    case Type.CHANGE_STEP:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
