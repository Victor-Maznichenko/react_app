import React from "react";

//Import styles
import styles from "./sort.module.scss";

function Sort({ className, sortOrder, changeOrderSort, value, onChangeSort}) {
  const dataList = [
    {
      name: 'популярности',
      sortProperty: 'rating'
    },
    {
      name: 'цене',
      sortProperty: 'price'
    },
    {
      name: 'алфавиту',
      sortProperty: 'title'
    },
  ];
  const [isSortOpen, setSortOpen] = React.useState(false);

  const toggleSort = () => {
    setSortOpen(!isSortOpen);
  };

  const changeSelectItem = (obj) => {
    onChangeSort(obj);
    setSortOpen(false);
  };

  return (
    <div className={`${styles.root} ${isSortOpen ? styles.open : ""}`}>
      <div className={styles.top}>
        Сортировка по:{" "}
        <span onClick={toggleSort}>{value.name}</span>
        <button
          onClick={() => changeOrderSort()}
          className={sortOrder ? styles.topOrderAsc : styles.topOrderDesc}
        >
          ↑
        </button>
      </div>
      <div className={styles.container}>
        <ul className={styles.containerList}>
          {dataList.map((obj, id) => (
            <li
              className={`${styles.containerItem} ${
                obj.sortProperty === value.sortProperty ? styles.containerItemActive : ""
              }`}
              onClick={() => {
                changeSelectItem(obj);
              }}
              key={id}
            >
              {obj.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sort;
