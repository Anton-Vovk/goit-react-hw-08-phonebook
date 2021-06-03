import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.phonebook.loading;
const getContacts = state => state.phonebook.items;
const getPhonebook = state => state.phonebook;
const getFilter = state => state.phonebook.filter;

const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export {
  getLoading,
  getContacts,
  getPhonebook,
  getFilter,
  getFilteredContacts,
};
