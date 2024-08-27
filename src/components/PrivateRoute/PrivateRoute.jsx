import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLogged } from "../../redux/auth/selectors";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLogged);

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
