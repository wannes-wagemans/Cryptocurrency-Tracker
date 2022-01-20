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

function App() {



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
