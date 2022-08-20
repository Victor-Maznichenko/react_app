import React from "react";

//Import styles
import styles from "./sort.module.scss";

function Sort({ className }) {
  const [isSortOpen, setSortOpen] = React.useState(false);
  const sortVars = ["популярности", "цене", "алфавиту"];

  const toggleSort = () => {
    setSortOpen(!isSortOpen);
  };

  const containerItems = sortVars.map((sortItem, id) => (
    <li className={styles.containerItem} key={id}>
      {sortItem}
    </li>
  ));

  return (
    <div className={`${styles.sorting} ${isSortOpen ? styles.open : ""}`}>
      <div className={styles.top} onClick={toggleSort}>
        Сортировка по: <span>{sortVars[0]}</span>
      </div>
      <div className={styles.container}>
        <ul className={styles.containerList}>{containerItems}</ul>
      </div>
    </div>
  );
}

export default Sort;
