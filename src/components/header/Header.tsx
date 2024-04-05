import "./Header.scss";
import logo from "/img/svg/logo.svg";
import coffeeCup from "/img/svg/coffee-cup.svg";
import { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className="header">
      <Link to={"/"} className="logo">
        <img className="logo__icon" src={logo} alt="logo" />
      </Link>

      <nav className="navigation">
        <ul className="navigation__items">
          <li>
            <a className="navigation__item" href="#favorite">
              Favorite coffee
            </a>
          </li>
          <li>
            <a className="navigation__item" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="navigation__item" href="#mobile">
              Mobile app
            </a>
          </li>
          <li className="navigation__item">Contact us</li>
        </ul>
      </nav>
      <Link to={"/menu"}>
        <div className="menu">
          <div className="menu__title">Menu</div>
          <img className="menu__icon" src={coffeeCup} alt="cup" />
        </div>
      </Link>
    </header>
  );
};

export default Header;
