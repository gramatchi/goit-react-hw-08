import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLogged } from "../../redux/auth/selectors";

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLogged);

  return isLoggedIn ? <Navigate to={"/contacts"} replace /> : children;
};

export default PublicRoute;
