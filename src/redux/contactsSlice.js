import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'cont',
  initialState: {
    items: [{ name: 'Вадим', number: '0507338593', id: 1 }],
  },
  reducers: {
    addContact(state, { payload }) {
      payload = { ...payload, id: nanoid() };
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
