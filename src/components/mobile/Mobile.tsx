import { FC } from "react";
import "./Mobile.scss";
import iconApp from "/img/svg/icon-app-store.svg";
import iconGoogle from "/img/svg/icon-google-play.svg";
import mobileScreens from "/img/png/mobile-screens.png";

const Mobile: FC = () => {
  return (
    <section className="mobile">
      <div className="mobile__content">
        <h2 className="mobile__title">
          <span>Download</span> our apps to start ordering
        </h2>
        <p className="mobile__text">
          Download the Resource app today and experience the comfort of ordering
          your favorite coffee from wherever you are
        </p>
        <div className="mobile__apps">
          <div className="mobile__app">
            <img src={iconApp} alt="icon" className="mobile__icon" />
            <div className="mobile__text-store">
              <p className="mobile__availiable">Available on the</p>
              <p className="mobile__market">App Store</p>
            </div>
          </div>
          <div className="mobile__app">
            <img src={iconGoogle} alt="icon" className="mobile__icon" />
            <div className="mobile__text-store">
              <p className="mobile__availiable">Available on the</p>
              <p className="mobile__market">Google Play</p>
            </div>
          </div>
        </div>
      </div>
      <img src={mobileScreens} alt="mobiles" className="mobile__screens" />
    </section>
  );
};

export default Mobile;
