import Contact from "./Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContactsFilteredMemo } from "../../redux/selectore";

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
