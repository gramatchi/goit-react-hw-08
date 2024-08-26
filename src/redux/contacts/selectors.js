import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.contacts;
export const selectIsError = (state) => state.contacts.error;
export const selectIsLoading = (state) => state.contacts.loading;

export const selectContactsFilteredMemo = createSelector(
  [selectContacts, (state) => state.filter.filter],
  (contacts, filter) => {
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  }
);
