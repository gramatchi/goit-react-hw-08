import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.contacts;
export const selectIsError = (state) => state.contacts.error;
export const selectIsLoading = (state) => state.contacts.loading;

export const selectContactsFilteredMemo = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    // console.log('Filtered contacts:', filteredContacts);
    return filteredContacts;
  }
);
