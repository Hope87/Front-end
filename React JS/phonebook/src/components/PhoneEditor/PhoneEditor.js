import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useAlert } from "react-alert";
import { v4 as uuidv4 } from "uuid";
import { addContact } from "../../redux/phoneOperations";
import css from "./PhoneEditor.module.css";
import { getContacts } from "../../redux/phoneSelectors";

const PhoneEditor = ({ onSubmit, contacts }) => {
  const nameId = uuidv4();
  const numberId = uuidv4();

  const alert = useAlert();

  const [name, setContactName] = useState("");

  const onChangeName = (e) => {
    setContactName(e.target.value);
  };

  const [number, setContactNumber] = useState("");

  const onChangeNumber = (e) => {
    setContactNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dublicatedContact = contacts
      .map((contact) => contact.name)
      .includes(name);

    if (dublicatedContact) {
      alert.show(`${name} is already in contacts`);
    } else {
      const contact = {
        id: uuidv4(),
        name,
        number,
      };

      onSubmit(contact);
    }

    setContactName("");
    setContactNumber("");
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor={nameId}>
        Name
        <input
          className={css.input}
          type="text"
          id={nameId}
          value={name}
          onChange={onChangeName}
        />
      </label>

      <label className={css.label} htmlFor={numberId}>
        Number
        <input
          className={css.input}
          type="text"
          id={numberId}
          value={number}
          onChange={onChangeNumber}
        />
      </label>

      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  contacts: getContacts(state),
});

const mapDispatchToProps = {
  onSubmit: addContact,
};

PhoneEditor.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneEditor);
