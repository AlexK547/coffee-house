import styles from "./styles.module.scss";
import { FC, useState } from "react";
import tabItem1 from "/img/png/icon-coffee.png";
import tabItem2 from "/img/png/icon-tea.png";
import tabItem3 from "/img/png/icon-dessert.png";
import MenuCard from "./MenuCard";
import { listCoffee } from "../../store/menuCoffee";
import { listTea } from "../../store/menuTea";
import { listDessert } from "../../store/menuDessert";

const Menu: FC = () => {
  const [choice, setChoice] = useState<number>(0);

  const clickChoice = (word: string): void => {
    if (word === "coffee") {
      setChoice(0);
    }
    if (word === "tea") {
      setChoice(1);
    }
    if (word === "dessert") {
      setChoice(2);
    }
  };

  return (
    <section className={styles["menu-items"]}>
      <h2 className={styles["menu-items__title"]}>
        Behind each of our cups hides an <span>amazing surprise</span>
      </h2>
      <div className={styles.content}>
        <div className={styles.tabs}>
          <div
            onClick={() => clickChoice("coffee")}
            className={
              choice === 0
                ? `${styles.tabs__item} ${styles.tabs__item_select}`
                : `${styles.tabs__item}`
            }
          >
            <div className={styles["tabs__item-img"]}>
              <img src={tabItem1} alt="coffee" />
            </div>
            <p className={styles["tabs__item-text"]}>Coffee</p>
          </div>
          <div
            onClick={() => clickChoice("tea")}
            className={
              choice === 1
                ? `${styles.tabs__item} ${styles.tabs__item_select}`
                : `${styles.tabs__item}`
            }
          >
            <div className={styles["tabs__item-img"]}>
              <img src={tabItem2} alt="coffee" />
            </div>
            <p className={styles["tabs__item-text"]}>Tea</p>
          </div>
          <div
            onClick={() => clickChoice("dessert")}
            className={
              choice === 2
                ? `${styles.tabs__item} ${styles.tabs__item_select}`
                : `${styles.tabs__item}`
            }
          >
            <div className={styles["tabs__item-img"]}>
              <img src={tabItem3} alt="coffee" />
            </div>
            <p className={styles["tabs__item-text"]}>Dessert</p>
          </div>
        </div>
      </div>

      {choice === 0 && (
        <div className={styles["menu-cards"]}>
          {listCoffee.map((item) => (
            <MenuCard key={item.id} drink={item} />
          ))}
        </div>
      )}

      {choice === 1 && (
        <div className={styles["menu-cards"]}>
          {listTea.map((item) => (
            <MenuCard key={item.id} drink={item} />
          ))}
        </div>
      )}

      {choice === 2 && (
        <div className={styles["menu-cards"]}>
          {listDessert.map((item) => (
            <MenuCard key={item.id} drink={item} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Menu;
