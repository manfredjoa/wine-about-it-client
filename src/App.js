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
import Alan from "./test/alan.jsx";
import Footer from "./layouts/Footer.jsx";

import ManfredTest from "./pages/ManfredTest.jsx";
import AccountInfoPage from "./pages/AccountInfoPage.jsx";

function App() {
  return (
    <div>
      <AccountInfoPage />
      {/* 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search/wine-detail" element={<WineDetailPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/shopping-cart" element={<ShoppingCartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />

        {/* //don't forget to remove this route */}
      {/*  <Route path="/alan" element={<Alan />} />
        <Route path="/filter" element={<FilterPage />} />

        <Route path="/manfred-test" element={<ManfredTest />} />

      </Routes>
      }
    */}
    </div>
  );
}

export default App;

// wineDetail in URL to be replaced by slug (probably :WineName)
// Kebab case for URL? This makes the most sense to me
