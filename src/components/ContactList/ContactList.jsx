import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectContactsFilteredMemo } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectContactsFilteredMemo);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={css.contactsList}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
