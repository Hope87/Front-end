export const getContacts = (state) => state.contacts.items;

export const getFilter = (state) => state.contacts.filter;

export const getFlag = (state) => state.contacts.isOpen;

export const getContactsByName = (state) => {
  if (state.contacts.filter) {
    return state.contacts.items.filter((contact) =>
      contact.name.toLowerCase().includes(state.contacts.filter.toLowerCase())
    );
  } else {
    return state.contacts.items;
  }
};
