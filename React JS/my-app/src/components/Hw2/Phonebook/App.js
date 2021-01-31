import React, { Component } from 'react';
import shortid from 'shortid';
import styled from 'styled-components';
import ContactForm from './ContactForm/ContactForm';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

const StyledDiv = styled.div`
  margin-left: 50px;
`;

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const persistedContacts = localStorage.getItem('contacts');

    if (persistedContacts) {
      this.setState({
        contacts: JSON.parse(persistedContacts),
      });
    }
  }

  componentDidUpdate(prevState) {
    const { contacts } = this.state;

    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  addContact = data => {
    const { name, number } = data;

    const duplicatedContact = this.state.contacts
      .map(contact => contact.name)
      .includes(name);

    if (duplicatedContact) {
      alert(`${name} is already in contacts`);
    } else {
      const newContact = {
        id: shortid.generate(),
        name,
        number,
      };

      this.setState(state => ({
        contacts: [...state.contacts, newContact],
      }));
    }
  };

  changeFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  removeContact = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const arrayContacts = this.filterContacts();

    return (
      <StyledDiv>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        <Contacts
          options={arrayContacts}
          onRemoveContact={this.removeContact}
        />
      </StyledDiv>
    );
  }
}
