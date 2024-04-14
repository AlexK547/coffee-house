import { FC } from "react";
import "./Enjoy.scss";
import video from "/video/video(720p).webm"

const Enjoy: FC = () => {
  return (
    <section className="enjoy" id="enjoy">
      <video autoPlay muted loop>
        <source src={video} type="video/webm" />
      </video>
      <div className="enjoy__content">
        <h1 className="enjoy__title">
          <span>Enjoy</span> premium coffee at
          our charming cafe
        </h1>
        <p className="enjoy__text">
          With its inviting atmosphere and delicious coffee options, the Coffee
          House Resource is a popular destination for coffee lovers and those
          seeking a warm and inviting space to enjoy their favorite beverage.
        </p>
        <button className="enjoy__btn" type="button">
          Menu
        </button>
      </div>
    </section>
  );
};

export default Enjoy;
