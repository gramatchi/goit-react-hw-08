import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import css from './AppBar.module.css';  

export const AppBar = () => {
  const isUser = false;
  return (
    <header className={css.header}>
      <Navigation />
      {isUser ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
