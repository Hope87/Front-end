import { combineReducers, createStore } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as phoneActions from "./phoneActions";

const contactsReducer = createReducer([], {
  [phoneActions.fetchContactsSuccess]: (state, action) => action.payload,

  [phoneActions.addContactSuccess]: (state, action) => [
    ...state,
    action.payload,
  ],
  [phoneActions.deleteContactSuccess]: (state, action) =>
    state.filter((item) => item.id !== action.payload),
});

const filterReducer = createReducer("", {
  [phoneActions.contactFilter]: (state, action) => action.payload,
});

const filterFlagReducer = createReducer(false, {
  [phoneActions.flagFilter]: (state, action) => action.payload,
});

const loadingReducer = createReducer(false, {
  [phoneActions.fetchContactsStart]: () => true,
  [phoneActions.addContactStart]: () => true,
  [phoneActions.deleteContactStart]: () => true,

  [phoneActions.fetchContactsSuccess]: () => false,
  [phoneActions.fetchContactsError]: () => false,
  [phoneActions.addContactSuccess]: () => false,
  [phoneActions.addContactError]: () => false,
  [phoneActions.deleteContactSuccess]: () => false,
  [phoneActions.deleteContactError]: () => false,
});

const errorReducer = createReducer(null, {
  [phoneActions.fetchContactsStart]: () => null,
  [phoneActions.deleteContactStart]: () => null,

  [phoneActions.fetchContactsError]: (action) => action.payload.error,
  [phoneActions.deleteContactError]: (action) => action.payload.error,
});

export default combineReducers({
  items: contactsReducer,
  loading: loadingReducer,
  error: errorReducer,
  filter: filterReducer,
  isOpen: filterFlagReducer,
});

// const contactsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case ActionType.FETCH_CONTACTS_SUCCESS:
//       return payload.contacts;

//     case ActionType.ADD_CONTACT_SUCCESS:
//       return [...state, payload.contact];

//     case ActionType.DELETE_CONTACT_SUCCESS:
//       return state.filter((item) => item.id !== payload.id);

//     default:
//       return state;
//   }
// };

// const loadingReducer = (state = false, { type }) => {
//   switch (type) {
//     case ActionType.FETCH_CONTACTS_START:
//     case ActionType.ADD_CONTACT_START:
//     case ActionType.DELETE_CONTACT_START:
//       return true;

//     case ActionType.FETCH_CONTACTS_SUCCESS:
//     case ActionType.FETCH_CONTACTS_ERROR:
//     case ActionType.ADD_CONTACT_SUCCESS:
//     case ActionType.ADD_CONTACT_ERROR:
//     case ActionType.DELETE_CONTACT_SUCCESS:
//     case ActionType.DELETE_CONTACT_ERROR:
//       return false;

//     default:
//       return state;
//   }
// };

// const errorReducer = (state = null, { type, payload }) => {
//   switch (type) {
//     case ActionType.FETCH_CONTACTS_START:
//     case ActionType.DELETE_CONTACT_START:
//       return null;

//     case ActionType.FETCH_CONTACTS_ERROR:
//     case ActionType.DELETE_CONTACT_ERROR:
//       return payload.error;

//     default:
//       return state;
//   }
// };
