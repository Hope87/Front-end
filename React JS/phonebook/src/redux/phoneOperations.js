import axios from "axios";
import {
  fetchContactsStart,
  fetchContactsSuccess,
  fetchContactsError,
  addContactStart,
  addContactSuccess,
  addContactError,
  deleteContactStart,
  deleteContactSuccess,
  deleteContactError,
} from "../redux/phoneActions";

export const fetchContacts = () => (dispatch) => {
  dispatch(fetchContactsStart());

  axios
    .get("http://localhost:4040/contacts")
    .then((response) => {
      dispatch(fetchContactsSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchContactsError(error));
    });
};

export const addContact = (contact) => (dispatch) => {
  dispatch(addContactStart());

  axios
    .post("http://localhost:4040/contacts", contact)
    .then((response) => {
      dispatch(addContactSuccess(response.data));
    })
    .catch((error) => {
      dispatch(addContactError(error));
    });
};

export const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactStart());

  axios
    .delete(`http://localhost:4040/contacts/${id}`)
    .then(() => {
      dispatch(deleteContactSuccess(id));
    })
    .catch((error) => {
      dispatch(deleteContactError(error));
    });
};
