import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContactsFilteredMemo } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";

const ContactList = () => {

  const filteredContacts = useSelector(selectContactsFilteredMemo);

  return (
    <ul className={css.contactsList}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
