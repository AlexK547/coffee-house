import { FC } from "react";
import "./About.scss";

const About: FC = () => {
  return (
    <section className="about" id="about">
      <h2 className="about__title">
        Resource is <span>the perfect and cozy place</span> where you can enjoy a variety of
        hot beverages, relax, catch up with friends, or get some work done.
      </h2>
      <div className="images">
        <div className="images__left">
            <div className="images__left_top"></div>
            <div className="images__left_bottom"></div>
        </div>
        <div className="images__right">
            <div className="images__right_top"></div>
            <div className="images__right_bottom"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
