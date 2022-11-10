import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const initialState = { items: [], isLoading: false, error: null };

function isPendingAction(action) {
  return action.type.endsWith('pending');
}

function isRejectedAction(action) {
  return action.type.endsWith('rejected');
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (_, { payload }) => ({
        items: [...payload],
        isLoading: false,
      }))
      .addCase(
        addContact.fulfilled,
        ({ items }, { payload: { name, phone, id } }) => ({
          items: [...items, { id, name, phone }],
          isLoading: false,
        })
      )
      .addCase(deleteContact.fulfilled, ({ items }, { payload: { id } }) => ({
        items: items.filter(contact => contact.id !== id),
        isLoading: false,
      }))
      .addMatcher(isPendingAction, state => ({
        ...state,
        isLoading: true,
        error: null,
      }))
      .addMatcher(isRejectedAction, state => ({
        ...state,
        isLoading: true,
        error: null,
      }));
  },
});

export const contactsReducer = contactsSlice.reducer;
