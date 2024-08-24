import { selectContacts, selectFilter } from "../../redux/selectore";
import Contact from "./Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from 'react-redux';


const ContactList = () => {
  const contacts = useSelector(selectContacts);
	const filter = useSelector(selectFilter);
	const filteredContacts = contacts.filter(contact =>
		contact.name.toLowerCase().includes(filter.toLowerCase())
	);
  return (
    <ul className={css.contactsList}>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
