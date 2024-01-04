import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filt',
  initialState: '',
  reducers: {
    filteredContacts(state, { payload }) {
      return payload; // связь со state, почему неактивен
    },
  },
});

export const { filteredContacts } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
