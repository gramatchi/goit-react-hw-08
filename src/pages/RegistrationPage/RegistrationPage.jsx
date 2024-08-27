import { useSelector } from "react-redux";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { selectIsLogged } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const RegistrationPage = () => {
  const isLoggedIn = useSelector(selectIsLogged);
  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }
  return <RegistrationForm />;
};

export default RegistrationPage;
