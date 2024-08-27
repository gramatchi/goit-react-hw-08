import SearchBox from "../../components/SearchBox/SearchBox";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
// import { useSelector } from "react-redux";
// import { selectIsLogged } from "../../redux/auth/selectors";
// import { toast } from "react-toast";
// import { Navigate } from "react-router-dom";

const ContactsPage = () => {
    // const isLoggedIn = useSelector(selectIsLogged);
    // if(!isLoggedIn){
    //     toast.error('Sorry but this resource is private! Please ligin');
    //     return <Navigate to='/login'/>
    // }
  return (
    <div>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
