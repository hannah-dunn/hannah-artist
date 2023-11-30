import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navLinkClasses = ({ isActive }) => {
    return isActive ? `${styles.link} ${styles.active_link}` : styles.link;
  };

  return (
    <>
      <nav className={styles.nav}>
        <p>☆</p>
        <NavLink className={navLinkClasses} to="/">
          home
        </NavLink>
        <NavLink className={navLinkClasses} to="/videos">
          videos
        </NavLink>
        <NavLink className={navLinkClasses} to="/contact">
          contact
        </NavLink>
        <p>☆</p>
      </nav>
    </>
  );
};

export default NavBar;
