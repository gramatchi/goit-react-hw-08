import Contact from "./Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <ul className={css.contactsList}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          handleDeleteContact={handleDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
