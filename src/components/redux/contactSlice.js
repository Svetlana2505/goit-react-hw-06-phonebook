import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contact: [],
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    formSubmitHandler: (state, { payload }) => {
      state.contact.push(payload);
    },

    deleteContact: (state, { payload }) => {
      state.contact = state.contact.filter(({ id }) => id !== payload);
    },
  },
});

export const { formSubmitHandler, deleteContact } = contactSlice.actions;

export const contactsReduser = contactSlice.reducer;
