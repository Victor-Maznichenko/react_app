import React from "react";
import styles from "./categoryItem.module.scss";

function CategoryItem({ text, active, className }) {
  return (
    <li className={`${styles.filter} ${active ? styles.filterActive : ""}`}>
      <button className={styles.btn}>{text}</button>
    </li>
  );
}

export default CategoryItem;
