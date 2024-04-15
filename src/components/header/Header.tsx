import styles from "./Header.module.scss";
import logo from "/img/svg/logo.svg";
import coffeeCup from "/img/svg/coffee-cup.svg";
import { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Link to={"/"} className={styles.logo}>
        <img className={styles.logo__icon} src={logo} alt="logo" />
      </Link>

      <nav className={styles.navigation}>
        <ul className={styles.navigation__items}>
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
          <li>
            <a  className={styles.navigation__item} href="#contacts">
              Contact us
            </a>
          </li>
        </ul>
      </nav>
      <Link to={"/menu"}>
        <div className={styles.menu}>
          <div className={styles.menu__title}>Menu</div>
          <img className={styles.menu__icon} src={coffeeCup} alt="cup" />
        </div>
      </Link>
    </header>
  );
};

export default Header;
