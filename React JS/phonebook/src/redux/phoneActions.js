import { createAction } from "@reduxjs/toolkit";

// export const ActionType = {
//   FETCH_CONTACTS_START: "FETCH_CONTACTS_START",
//   FETCH_CONTACTS_SUCCESS: "FETCH_CONTACTS_SUCCESS",
//   FETCH_CONTACTS_ERROR: "FETCH_CONTACTS_ERROR",
//   ADD_CONTACT_START: "ADD_CONTACT_START",
//   ADD_CONTACT_SUCCESS: "ADD_CONTACT_SUCCESS",
//   ADD_CONTACT_ERROR: "ADD_CONTACT_ERROR",
//   DELETE_CONTACT_START: "DELETE_CONTACT_START",
//   DELETE_CONTACT_SUCCESS: "DELETE_CONTACT_SUCCESS",
//   DELETE_CONTACT_ERROR: "DELETE_CONTACT_ERROR",
// };

export const fetchContactsStart = createAction("FETCH_CONTACTS_START");
export const fetchContactsSuccess = createAction("FETCH_CONTACTS_SUCCESS");
export const fetchContactsError = createAction("FETCH_CONTACTS_ERROR");
export const addContactStart = createAction("ADD_CONTACT_START");
export const addContactSuccess = createAction("ADD_CONTACT_SUCCESS");
export const addContactError = createAction("ADD_CONTACT_ERROR");
export const deleteContactStart = createAction("DELETE_CONTACT_START");
export const deleteContactSuccess = createAction("DELETE_CONTACT_SUCCESS");
export const deleteContactError = createAction("DELETE_CONTACT_ERROR");
export const contactFilter = createAction("FILTER_CONTACT");
export const flagFilter = createAction("FILTER_VISIBLE");

/**
 * Fetch
 */
// export const fetchContactsStart = () => ({
//   type: FETCH_CONTACTS_START,
// });

// export const fetchContactsSuccess = (contacts) => ({
//   type: FETCH_CONTACTS_SUCCESS,
//   payload: {
//     contacts,
//   },
// });

// export const fetchContactsError = (error) => ({
//   type: FETCH_CONTACTS_ERROR,
//   payload: {
//     error,
//   },
// });

// /**
//  * addContact
//  */
// export const addContactStart = () => ({
//   type: ADD_CONTACT_START,
// });

// export const addContactSuccess = (contact) => ({
//   type: ADD_CONTACT_SUCCESS,
//   payload: {
//     contact,
//   },
// });

// export const addContactError = (error) => ({
//   type: ADD_CONTACT_ERROR,
//   payload: {
//     error,
//   },
// });

// /**
//  * Delete contact
//  */

// export const deleteContactStart = () => ({
//   type: DELETE_CONTACT_START,
// });

// export const deleteContactSuccess = (id) => ({
//   type: DELETE_CONTACT_SUCCESS,
//   payload: {
//     id,
//   },
// });

// export const deleteContactError = (error) => ({
//   type: DELETE_CONTACT_ERROR,
//   payload: {
//     error,
//   },
// });
