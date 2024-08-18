import { useEffect, useState } from "react";
import "./App.css";

import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";

function App() {
  const initialContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];
  const [contacts, setContacts] = useState(() => {
    return window.localStorage.getItem("contacts")
      ? JSON.parse(window.localStorage.getItem("contacts"))
      : initialContacts;
  });

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts)),
      [contacts];
  });

  const [filter, setFilter] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleAddContact = (contact) => {
    setContacts((prev) => [...prev, { ...contact, id: nanoid() }]);
  };

  const handleDeleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <SearchBox filter={filter} setFilter={setFilter} />
      <ContactList
        contacts={filteredContacts}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
}

export default App;
