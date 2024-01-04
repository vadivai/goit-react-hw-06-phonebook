import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'cont',
  initialState: {
    items: [],
  },
  reducers: {
    addContact(state, { payload }) {
      // console.log('payload add', payload);
      state.items.push(payload);
    },
    deleteContact(state, { payload }) {
      // console.log('payload delete', payload);
      state.items = state.items.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
