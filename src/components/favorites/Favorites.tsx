import "./Favorites.scss";
import card1 from "/img/png/coffee-slider-1.png";
import arrowLeft from "/img/svg/button-icon-dark.svg";
import { FC } from "react";

const Favorites: FC = () => {
  return (
    <section className="favorite" id="favorite">
      <h2 className="favorite__title">
        Choose your <span className="favorite__title_favorite">favorite</span>{" "}
        coffee
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
          <img className="card__img" src={card1} alt="card" />
          <h3 className="card__title">S’mores Frappuccino</h3>
          <p className="card__content">
            This new drink takes an espresso and mixes it with brown sugar and
            cinnamon before being topped with oat milk.
          </p>
          <p className="card__price">$5.50</p>
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
}

export default Favorites;