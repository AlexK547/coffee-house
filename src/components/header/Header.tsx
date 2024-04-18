import styles from "./styles.module.scss";
import logo from "/img/svg/logo.svg";
import coffeeCup from "/img/svg/coffee-cup.svg";
import { Link } from "react-router-dom";

interface propsHeader {
  isHome: boolean;
  setHome: Function;
}

function Header(props: propsHeader) {
  return (
    <header className={styles.header}>
      <Link
        to={"/"}
        className={styles.logo}
        onClick={() => props.setHome(true)}
      >
        <img className={styles.logo__icon} src={logo} alt="logo" />
      </Link>
      <nav className={styles.navigation}>
        <ul className={styles.navigation__items}>
          {props.isHome && (
            <>
              <li>
                <a className={styles.navigation__item} href="#favorite">
                  Favorite coffee
                </a>
              </li>
              <li>
                <a className={styles.navigation__item} href="#about">
                  About
                </a>
              </li>
              <li>
                <a className={styles.navigation__item} href="#mobile">
                  Mobile app
                </a>
              </li>
            </>
          )}
          <li>
            <a className={styles.navigation__item} href="#contacts">
              Contact us
            </a>
          </li>
        </ul>
      </nav>
      <Link to={"/menu"} onClick={() => props.setHome(false)}>
        <div className={props.isHome ? styles.menu : styles.menu + " " + styles["menu_under-line"]}>
          <div className={styles.menu__title}>Menu</div>
          <img className={styles.menu__icon} src={coffeeCup} alt="cup" />
        </div>
      </Link>
    </header>
  );
}

export default Header;
