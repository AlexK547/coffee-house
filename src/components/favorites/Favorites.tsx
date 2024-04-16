import "./Favorites.scss";
import { FC, useState } from "react";
import { listFavoriteCoffee } from "../../store/favoriteCoffee";
// import { getImageURL } from "../../utils/image-util";

const Favorites: FC = () => {
  const [numberCoffee, setNumberCoffee] = useState<number>(0);
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
    <section className="favorite" id="favorite">
      <h2 className="favorite__title">
        Choose your <span>favorite</span> coffee
      </h2>
      <div className="slider">
        <div className="slider__arrow" onClick={onClickLeft}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 7H1M1 7L7 1M1 7L7 13" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div className="card">
          {/* <img className="card__img" src={getImageURL(favoriteCoffee.image)} alt="card" /> */}
          <img className="card__img" src={currentCoffee.image} alt="card" />
          <h3 className="card__title">{currentCoffee.title}</h3>
          <p className="card__content">{currentCoffee.text}</p>
          <p className="card__price">{currentCoffee.price}</p>
        </div>
        <div className="slider__arrow" onClick={onClickRight}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7H13.5M13.5 7L7.5 1M13.5 7L7.5 13" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
      <div className="controls">
        <div className={numberCoffee === 0 ? "controls__item controls__item_select" : "controls__item"}></div>
        <div className={numberCoffee === 1 ? "controls__item controls__item_select" : "controls__item"}></div>
        <div className={numberCoffee === 2 ? "controls__item controls__item_select" : "controls__item"}></div>
      </div>
    </section>
  );
};

export default Favorites;
