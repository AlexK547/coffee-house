import styles from "./styles.module.scss";
import coffeeCup from "/img/svg/coffee-cup.svg";
import video from "/video/video(720p).webm";
import { Link } from "react-router-dom";

interface propsEnjoy {
  setHome: Function;
}

function Enjoy(props: propsEnjoy) {
  return (
    <section className={styles.enjoy} id="enjoy">
      <video autoPlay muted loop>
        <source src={video} type="video/webm" />
      </video>
      <div className={styles.enjoy__content}>
        <h1 className={styles.enjoy__title}>
          <span>Enjoy</span> premium coffee at our charming cafe
        </h1>
        <p className={styles.enjoy__text}>
          With its inviting atmosphere and delicious coffee options, the Coffee
          House Resource is a popular destination for coffee lovers and those
          seeking a warm and inviting space to enjoy their favorite beverage.
        </p>
        <Link to={"/menu"} onClick={() => props.setHome(false)}>
          <div className={styles.enjoy__btn}>
            <div className={styles["enjoy__btn-title"]}>Menu</div>
            <img className={styles["enjoy__btn-icon"]} src={coffeeCup} alt="cup" />
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Enjoy;
