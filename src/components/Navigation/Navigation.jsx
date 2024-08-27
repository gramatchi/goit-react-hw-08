import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={css.navLink}>
        Home
      </NavLink>

      <NavLink className={css.navLink} to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
