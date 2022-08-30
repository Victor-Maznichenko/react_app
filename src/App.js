import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios";

import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import Home from "pages/Home";
import Cart from "pages/Cart";

export const SearchContext = React.createContext();

function App() {
  const categorySelect = useSelector(state => state.filter.value)
  const dispatch = useDispatch()


  const [sortOrder, setSortOrder] = React.useState(false);
  const [sortType, setSortType] = React.useState({
    name: "популярности",
    sortProperty: "rating",
  });
  const [searchValue, setSearchValue] = React.useState("");
  const [pizzasData, setPizzasData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    const urlPizzas = `https://62b4b485530b26da4cc3f5c1.mockapi.io/items?category=${
      categorySelect > 0 ? categorySelect : ""
    }&sortBy=${sortType.sortProperty}&order=${
      sortOrder ? "asc" : "desc"
    }&page=${currentPage}&limit=4`;

    axios.get(urlPizzas).then((response) => {
      setPizzasData(response.data);
      setLoading(false);
    });

    window.scrollTo(0, 0);
  }, [categorySelect, sortType, sortOrder, searchValue, currentPage]);

  const categoriesData = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const onChangeSort = (obj) => {
    setSortType(obj);
  };

  const changeOrderSort = () => {
    setSortOrder(!sortOrder);
  };

  return (
    <div className="App">
      <SearchContext.Provider value={{searchValue, setSearchValue}}>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setCurrentPage={setCurrentPage}
                searchValue={searchValue}
                pizzasData={pizzasData}
                sortOrder={sortOrder}
                sortType={sortType}
                onChangeSort={onChangeSort}
                changeOrderSort={changeOrderSort}
                categorySelect={categorySelect}
                categoriesData={categoriesData}
                isLoading={isLoading}
              />
            }
          />
          <Route path="/cart/" element={<Cart />} />
        </Routes>
        <Footer />
      </SearchContext.Provider>
    </div>
  );
}

export default App;
