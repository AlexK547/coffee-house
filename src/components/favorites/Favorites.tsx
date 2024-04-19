import styles from "./styles.module.scss";
import { useState } from "react";
import { listFavoriteCoffee } from "../../store/favoriteCoffee";

export default function Favorites() {
  const [ numberCoffee, setNumberCoffee ] = useState<number>(0);
  const [currentCoffee, setCurrentCoffee] = useState(listFavoriteCoffee[numberCoffee]);

  const onClickLeft = () => {
    let number = numberCoffee - 1;
    if (number < 0) {
      number = listFavoriteCoffee.length - 1;
    }
    setTimeout(() => {
      setNumberCoffee(number);
      setCurrentCoffee(listFavoriteCoffee[number]);
    }, 300)
  }
  const onClickRight = () => {
    let number = numberCoffee + 1;
    if (number > listFavoriteCoffee.length - 1) {
      number = 0;
    }
    setTimeout(() => {
      setNumberCoffee(number);
    setCurrentCoffee(listFavoriteCoffee[number]);
    }, 300)
  }

  return (
    <section className={styles.favorite} id="favorite">
      <h2 className={styles.favorite__title}>
        Choose your <span>favorite</span> coffee
      </h2>
      <div className={styles.slider}>
        <div className={styles.slider__arrow} onClick={onClickLeft}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 7H1M1 7L7 1M1 7L7 13" stroke="#403F3D" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className={styles.card}>
          <img className={styles.card__img} src={currentCoffee.image} alt="card" />
          <h3 className={styles.card__title}>{currentCoffee.title}</h3>
          <p className={styles.card__content}>{currentCoffee.text}</p>
          <p className={styles.card__price}>{currentCoffee.price}</p>
        </div>
        <div className={styles.slider__arrow} onClick={onClickRight}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7H13.5M13.5 7L7.5 1M13.5 7L7.5 13" stroke="#403F3D" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className={styles.controls}>
        <div className={numberCoffee === 0 ? `${styles.controls__item} ${styles.controls__item_select}` : styles.controls__item}></div>
        <div className={numberCoffee === 1 ? `${styles.controls__item} ${styles.controls__item_select}` : styles.controls__item}></div>
        <div className={numberCoffee === 2 ? `${styles.controls__item} ${styles.controls__item_select}` : styles.controls__item}></div>
      </div>
    </section>
  );
};

