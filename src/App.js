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
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";

function App() {

  let theme = createTheme({
    palette: {
      primary: {
        main: '#013229',
        contrastText: '#FFF'
      },
      secondary: {
        main: '#FFC714',
      },
    },
  });

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => res.json())
      .then((data) => {
        dispatch(getData(data))
      })
  }, []);

  const dispatch = useDispatch()

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="/cryptocurrency-tracker">
          <Header />
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="checkout" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
