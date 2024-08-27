import LoginForm from "../../components/LoginForm/LoginForm";
// import { useSelector } from "react-redux";
// import { selectIsLogged } from "../../redux/auth/selectors";
// import { Navigate } from "react-router-dom";

const LoginPage = () => {
//   const isLoggedIn = useSelector(selectIsLogged);
//   if (isLoggedIn) {
//     return <Navigate to="/contacts" />;
//   }
  return <LoginForm />;
};

export default LoginPage;
