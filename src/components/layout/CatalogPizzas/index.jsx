import React from 'react'
import PizzaCard from 'components/UI/PizzaCard'

function CatalogPizzas() {
    return (
        <main className="main">
            <div className="container">
                <div className="main__inner">
                    <nav className="main__nav">
                        <ul className="main__nav-filters filters">
                            <li className="filters__item">
                                <button className="filters__item-button filters-btn filters-btn--active">
                                    Все
                                </button>
                            </li>
                            <li className="filters__item">
                                <button className="filters__item-button filters-btn">
                                    Мясные
                                </button>
                            </li>
                            <li className="filters__item">
                                <button className="filters__item-button filters-btn">
                                    Вегетарианская
                                </button>
                            </li>
                            <li className="filters__item">
                                <button className="filters__item-button filters-btn">
                                    Гриль
                                </button>
                            </li>
                            <li className="filters__item">
                                <button className="filters__item-button filters-btn">
                                    Острые
                                </button>
                            </li>
                            <li className="filters__item">
                                <button className="filters__item-button filters-btn">
                                    Закрытые
                                </button>
                            </li>
                        </ul>
                        <div className="main__nav-sorting sorting">
                            <div className="sorting__top">
                                Сортировка по: <span>популярности</span>
                            </div>
                            <div className="sorting__container">
                                <ul className="sorting__container-list">
                                    <li className="sorting__container-item active">популярности</li>
                                    <li className="sorting__container-item">по цене</li>
                                    <li className="sorting__container-item">по алфавиту</li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <section className="main__pizzas pizzas">
                        <h1 className="pizzas__title title">Все пиццы</h1>
                        <div className="pizzas__items">
                            <PizzaCard/>
                            <PizzaCard/>
                            <PizzaCard/>
                            <PizzaCard/>
                            <PizzaCard/>
                            <PizzaCard/>
                            <PizzaCard/>
                            <PizzaCard/>
                        </div>
                    </section>
                </div>
            </div>
        </main>

    )
}

export default CatalogPizzas