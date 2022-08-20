import React from "react";

import Header from "components/layout/Header";
import PizzaCard from "components/UI/PizzaCard";
import CategoryItem from "components/UI/CategoryItem";
import Sort from "components/UI/Sort";
import Footer from "components/layout/Footer";

import styles from "./home.module.scss";

function Home({ pizzasData }) {
  const categoriesData = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const CategoriesList = categoriesData.map((item, id) => (
    <CategoryItem className={styles.categoryItem} text={item} key={id} />
  ));

  const PizzasList = pizzasData.map((item, id) => (
    <PizzaCard className={styles.item} key={id} {...item} />
  ));

  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <div className="main__inner">
            <nav className="main__nav">
              <ul className="main__nav-filters filters">{CategoriesList}</ul>
              <Sort />
            </nav>
            <section className="main__pizzas pizzas">
              <h1 className="pizzas__title title">Все пиццы</h1>
              <div className="pizzas__items">{PizzasList}</div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
