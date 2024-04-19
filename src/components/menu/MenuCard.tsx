import styles from "./styles.module.scss";

type menuCardProps = {
  drink: {
    id: number;
    image: string;
    title: string;
    text: string;
    price: string;
  };
};

export default function MenuCard({ drink }: menuCardProps) {
  return (
    <div className={styles["menu-card"]}>
      <div className={styles["menu-card__img"]}>
        <img src={drink.image} alt="image" />
      </div>
      <h3 className={styles["menu-card__title"]}>{drink.title}</h3>
      <p className={styles["menu-card__text"]}>{drink.text}</p>
      <p className={styles["menu-card__price"]}>{drink.price}</p>
    </div>
  );
}
