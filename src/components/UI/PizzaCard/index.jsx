import React from "react";
import Option from "components/UI/Option";
import Button from "components/UI/Button";

//Import styles
import styles from "./pizzaCard.module.scss";

function PizzaCard({ id, imageUrl, title, types, sizes, price, className }) {
  const pizzaTypes = ["тонкое", "традиционное"];
  const pizzaSizes = [26, 30, 40];

  return (
    <div className={`${styles.pizza} ${className}`}>
      <img src={imageUrl} alt="" className={styles.img} />
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.options}>
        <div className={styles.thickness}>
          {pizzaTypes.map((pizzaType, id) => (
            <Option
              className={styles.option}
              text={pizzaType}
              disabled={!types.includes(id)}
              key={'type_' + id}
            />
          ))}
        </div>
        <div className={styles.width}>
          {pizzaSizes.map((pizzaSize, id) => (
            <Option
              className={styles.option}
              disabled={!sizes.includes(pizzaSize)}
              text={pizzaSize + " см."}
              key={'size_' + id}
            />
          ))}
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.price}>
          от <span>{price}</span> ₽
        </div>
        <Button className={styles.btn}>
          <svg
            width={12}
            height={12}
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" />
          </svg>
          Добавить
        </Button>
      </div>
    </div>
  );
}

export default PizzaCard;
