import React from 'react';
import { Routes, Route, } from "react-router-dom";
import axios from 'axios';
import Home from 'pages/Home';

function App() {
  const [pizzasData, setPizzasData] = React.useState([])

  React.useEffect(() => {
    axios.get('https://62b4b485530b26da4cc3f5c1.mockapi.io/items').then((response) => {
      setPizzasData(response.data)
    })
  }, [])

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home pizzasData={pizzasData} />} />
      </Routes>
    </div>
  );
}

export default App;
