import { Link } from "react-router-dom";
import css from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={css.container}>
      <Link to="/" className={css.link}>
        Home
      </Link>
      <img
        src="https://cdn.dribbble.com/users/2353504/screenshots/7498453/media/6b9d2cecfe00f117222162cfd943e17d.gif"
        alt="Page not found"
        className={css.image}
      />
    </div>
  );
};

export default NotFound;