import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchContacts } from "../redux/phoneOperations";
import { flagFilter } from "../redux/phoneActions";
import PhoneEditor from "./PhoneEditor/PhoneEditor";
import PhoneList from "./PhoneList/PhoneContainer";
import PhoneFilter from "./PhoneFilter/PhoneFilter";
import { getContacts } from "../redux/phoneSelectors";

const bodyStyle = {
  margin: "0 auto",
  width: "480px",
};

const logoStyle = {
  fontSize: "36px",
  color: "blue",
};

const App = ({ fetchContacts, contacts, invisibleFilter }) => {
  useEffect(() => fetchContacts(), []);

  if (contacts.length === 0) {
    invisibleFilter(false);
  } else {
    invisibleFilter(true);
  }

  return (
    <div style={bodyStyle}>
      <h1 style={logoStyle}>Phonebook</h1>
      <PhoneEditor />
      <PhoneFilter />
      <PhoneList />
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: getContacts(state),
});

const mapDispatchToProps = {
  fetchContacts,
  invisibleFilter: flagFilter,
};

App.propTypes = {
  fetchContacts: PropTypes.func.isRequired,
  invisibleFilter: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
