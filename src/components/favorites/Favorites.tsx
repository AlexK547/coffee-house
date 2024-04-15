import "./Favorites.scss";
// import card1 from "/img/png/coffee-slider-1.png";
import arrowLeft from "/img/svg/button-icon-dark.svg";
import { FC } from "react";
import { listFavoriteCoffee } from "../../store/favoriteCoffee";
import { getImageURL } from "../../utils/image-util";

const Favorites: FC = () => {
  const favoriteCoffee = listFavoriteCoffee[0];
  console.log(favoriteCoffee)

  return (
    <section className="favorite" id="favorite">
      <h2 className="favorite__title">
        Choose your <span>favorite</span> coffee
      </h2>
      <div className="slider">
        <div className="slider__arrow">
          <img
            className="slider__arrow_left"
            src={arrowLeft}
            alt="arrow left"
          />
        </div>
        <div className="card">
          <img className="card__img" src={getImageURL(favoriteCoffee.image)} alt="card" />
          <h3 className="card__title">{favoriteCoffee.title}</h3>
          <p className="card__content">{favoriteCoffee.text}</p>
          <p className="card__price">{favoriteCoffee.price}</p>
        </div>
        <div className="slider__arrow">
          <img
            className="slider__arrow_right"
            src={arrowLeft}
            alt="arrow right"
          />
        </div>
      </div>
      <div className="controls">
        <div className="controls__item controls__item_select"></div>
        <div className="controls__item"></div>
        <div className="controls__item"></div>
      </div>
    </section>
  );
};

export default Favorites;
