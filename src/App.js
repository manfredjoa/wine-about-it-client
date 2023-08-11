import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import WineDetailPage from "./pages/WineDetailPage.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import ShoppingCartPage from "./pages/ShoppingCartPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import FilterPage from "./pages/FilterPage.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search/wine-detail/:id" element={<WineDetailPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/shopping-cart" element={<ShoppingCartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/filter/:productType" element={<FilterPage />} />
      </Routes>
    </div>
  );
}

export default App;

// wineDetail in URL to be replaced by slug (probably :WineName)
// Kebab case for URL? This makes the most sense to me
