import React from 'react'

//Import styles
import styles from "./categories.module.scss";

function Categories({categorySelect, changeCategorySelect, categoriesData}) {
  const Categories = categoriesData.map((category, id) => (
    <li className={`${styles.item} ${categorySelect === id ? styles.itemActive : ""}`} onClick={() => changeCategorySelect(id)} key={id}>
      <button className={styles.btn}>{category}</button>
    </li>
  ));


  return (
    <ul className={styles.list}>
      {Categories}
    </ul>
  )
}

export default Categories