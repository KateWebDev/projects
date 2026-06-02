import { Link, NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "../components/Logo";

export default function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul className={styles.menu}>
        <li className={styles.menu__item}>
          <NavLink className={styles.menu__link} to="/product">
            Product
          </NavLink>
        </li>
        <li className={styles.menu__item}>
          <NavLink className={styles.menu__link} to="/pricing">
            Pricing
          </NavLink>
        </li>
        <li className={styles.menu__item}>
          <Link className={styles.ctaLink} to="/login">
            Log in
          </Link>
        </li>
      </ul>
    </nav>
  );
}
