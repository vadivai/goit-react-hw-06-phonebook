import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.cont.items;

export const selectFilter = state => state.filt;

// 2 вариант
export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
