import { NavLink } from "react-router-dom";
import css from './Navigation.module.css'; 
import { useSelector } from "react-redux";
import { selectIsLogged } from "../../redux/auth/selectors";


const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLogged);  

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={css.navLink}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.navLink} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
