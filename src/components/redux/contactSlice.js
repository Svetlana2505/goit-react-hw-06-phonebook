import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contact: [],
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    formSubmitHandler: (state, { payload }) => {
      const checkContacts = state.contact.some(
        contact => contact.name === payload.name
      );

      checkContacts
        ? alert(`${payload.name} is already in contacts`)
        : state.contact.push(payload);
    },

    deleteContact: (state, { payload }) => {
      state.contact = state.contact.filter(({ id }) => id !== payload);
    },
  },
});

export const { formSubmitHandler, deleteContact } = contactSlice.actions;

export const contactsReduser = contactSlice.reducer;
