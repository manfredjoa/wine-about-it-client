import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";
import WineDetail from "./pages/WineDetail.jsx";
import Favorites from "./pages/Favorites.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import ShoppingCart from "./pages/ShoppingCart.jsx";
import Checkout from "./pages/Checkout.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/wine-detail" element={<WineDetail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;

// wineDetail in URL to be replaced by slug (probably :WineName)
// Kebab case for URL? This makes the most sense to me
