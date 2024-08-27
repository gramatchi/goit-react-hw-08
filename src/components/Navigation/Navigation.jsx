import { NavLink } from "react-router-dom";
import css from './Navigation.module.css'; 

const Navigation = () => {
  const isLoggedIn = true;  

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={css.navLink}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={css.navLink}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
