import { useEffect } from "react";
import List from "./components/List";
import Header from "./components/Header";
import Footer from "./components/Footer"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Favorites from "./components/Favorites";
import Cart from "./components/Cart";
import { getData } from "./actions";
import { useDispatch } from "react-redux";

function App() {

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => res.json())
      .then((data) => {
        dispatch(getData(data))
        console.log(data)
      })
  }, []);

  const dispatch = useDispatch()

  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="checkout" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
