import { FC } from "react";
import "./Menu.scss";
import tabItem1 from "/img/png/icon-coffee.png";
import tabItem2 from "/img/png/icon-tea.png";
import tabItem3 from "/img/png/icon-dessert.png";
import imageCoffee1 from "/img/jpg/coffee-1.jpg"

const Menu: FC = () => {
  return (
    <section className="menu-items">
      <h2 className="menu-items__title">
        Behind each of our cups hides an <span>amazing surprise</span>
      </h2>
      <div className="content">
        <div className="tabs">
          <div className="tabs__item tabs__item_select">
            <img src={tabItem1} alt="coffee" className="tabs__img" />
            <p className="tabs__text">Coffee</p>
          </div>
          <div className="tabs__item">
            <img src={tabItem2} alt="coffee" className="tabs__img" />
            <p className="tabs__text">Tea</p>
          </div>
          <div className="tabs__item">
            <img src={tabItem3} alt="coffee" className="tabs__img" />
            <p className="tabs__text">Dessert</p>
          </div>
        </div>
      </div>
      <div className="menu-cards">
        <div className="menu-card">
          <div className="menu-card__img1 menu-card__img"></div>
          <h3 className="menu-card__title">Irish coffee</h3>
          <p className="menu-card__text">Fragrant black coffee with Jameson Irish whiskey and whipped milk</p>
          <p className="menu-card__price">$7.00</p>
        </div>
        <div className="menu-card">
          <div className="menu-card__img2 menu-card__img"></div>
          <h3 className="menu-card__title">Kahlua coffee</h3>
          <p className="menu-card__text">Classic coffee with milk and Kahlua liqueur under a cap of frothed milk</p>
          <p className="menu-card__price">$7.00</p>
        </div>
        <div className="menu-card">
          <div className="menu-card__img3 menu-card__img"></div>
          <h3 className="menu-card__title">Honey raf</h3>
          <p className="menu-card__text">Espresso with frothed milk, cream and aromatic honey</p>
          <p className="menu-card__price">$5.50</p>
        </div>
        <div className="menu-card">
          <div className="menu-card__img4 menu-card__img"></div>
          <h3 className="menu-card__title">Ice cappuccino</h3>
          <p className="menu-card__text">Cappuccino with soft thick foam in summer version with ice</p>
          <p className="menu-card__price">$4.00</p>
        </div>
        <div className="menu-card">
          <div className="menu-card__img5 menu-card__img"></div>
          <h3 className="menu-card__title">Espresso</h3>
          <p className="menu-card__text">Classic black coffee</p>
          <p className="menu-card__price">$4.50</p>
        </div>
        <div className="menu-card">
          <div className="menu-card__img6 menu-card__img"></div>
          <h3 className="menu-card__title">Latte</h3>
          <p className="menu-card__text">Espresso coffee with the addition of steamed milk and dense milk foam</p>
          <p className="menu-card__price">$5.50</p>
        </div>
        <div className="menu-card">
          <div className="menu-card__img7 menu-card__img"></div>
          <h3 className="menu-card__title">Latte macchiato</h3>
          <p className="menu-card__text">Espresso with frothed milk and chocolate</p>
          <p className="menu-card__price">$5.50</p>
        </div>
        <div className="menu-card">
          <div className="menu-card__img8 menu-card__img"></div>
          <h3 className="menu-card__title">Coffee with cognac</h3>
          <p className="menu-card__text">Fragrant black coffee with cognac and whipped cream</p>
          <p className="menu-card__price">$6.50</p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
