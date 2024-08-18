import { UserRound } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

const Contact = ({ contact, handleDeleteContact }) => {
  return (
    <li className={css.contact}>
      <div className={css.contactDetails}>
        <p className={css.contactName}>
          <UserRound size={16} />
          {contact.name}
        </p>
        <p className={css.contactNumber}>
          <FaPhoneAlt />
          {contact.number}
        </p>
      </div>
      <button
        className={css.deleteBtn}
        onClick={() => handleDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
