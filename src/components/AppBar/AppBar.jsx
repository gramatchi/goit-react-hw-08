import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import css from './AppBar.module.css';  
import { useSelector } from "react-redux";
import { selectIsLogged } from "../../redux/auth/selectors";

export const AppBar = () => {
  const isUser = useSelector(selectIsLogged);
  return (
    <header className={css.header}>
      <Navigation />
      {isUser ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
