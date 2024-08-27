import { useDispatch } from "react-redux";
import { UserRound } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

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
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
