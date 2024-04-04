import "./Header.scss"
import logo from "../../assets/img/svg/logo.svg"
import coffeeCup from "../../assets/img/svg/coffee-cup.svg"
import { FC } from "react"

const Header: FC = () => {
  return (
    <header className='header'>
        <div className="logo">
            <img className="logo__icon" src={logo} alt="logo" />
        </div>
        <nav className="navigation">
            <ul className="navigation__items">
                <li className="navigation__item">Favorite coffee</li>
                <li className="navigation__item">About</li>
                <li className="navigation__item">Mobile app</li>
                <li className="navigation__item">Contact us</li>
            </ul>
        </nav>
        <div className="menu">
            <div className="menu__title">Menu</div>
            <img className="menu__icon" src={coffeeCup} alt="cup" />
        </div>
    </header>
  )
}

export default Header;