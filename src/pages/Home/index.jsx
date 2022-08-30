import React from "react";

import PizzaCard from "components/UI/PizzaCard";
import Skeleton from "components/UI/PizzaCard/Skeleton";
import Sort from "components/UI/Sort";

//Import styles
import styles from "./home.module.scss";
import Categories from "components/UI/Categories";
import Pagination from './../../components/UI/Pagination/index';
import { SearchContext } from 'App';

function Home({
  pizzasData,
  isLoading,
  categorySelect,
  categoriesData,
  sortType,
  onChangeSort,
  changeOrderSort,
  sortOrder,
  setCurrentPage
}) {
  const {searchValue} = React.useContext(SearchContext);
  const PizzasList = pizzasData
    .filter((obj) =>
      obj.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    )
    .map((item, id) => (
      <PizzaCard className={styles.item} key={"PizzaCard_" + id} {...item} />
    ));
  const SkeletonList = [...new Array(8)].map((_, id) => (
    <Skeleton className={styles.item} key={"Skeleton_" + id} />
  ));

  return (
    <main className={styles.root}>
      <div className="container">
        <div className={styles.inner}>
          <nav className={styles.nav}>
            <Categories
              categorySelect={categorySelect}
              categoriesData={categoriesData}
            />
            <Sort
              onChangeSort={onChangeSort}
              value={sortType}
              sortOrder={sortOrder}
              changeOrderSort={changeOrderSort}
            />
          </nav>
          <section className={styles.pizzas}>
            <h1 className={`${styles.pizzasTitle} title`}>Все пиццы</h1>
            <div className={styles.pizzasItems}>
              {!isLoading ? PizzasList : SkeletonList}
            </div>
            <Pagination setCurrentPage={setCurrentPage} count={pizzasData.length} />
          </section>
        </div>
      </div>
    </main>
  );
}

export default Home;
