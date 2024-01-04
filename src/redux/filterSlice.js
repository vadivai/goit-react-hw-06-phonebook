import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filt',
  initialState: {
    filter: '',
  },
  reducers: {
    filteredContacts(state, { payload }) {
      return payload; // правильно ли это? где связь со state, почему неактивен?
    },
  },
});

export const { filteredContacts } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
