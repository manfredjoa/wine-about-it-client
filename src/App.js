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
import AccountInfoPage from "./pages/AccountInfoPage.jsx";
import Nav from "./layouts/Nav.jsx";
import Footer from "./layouts/Footer.jsx";
import { useState, useEffect } from "react";
import { verifyUser } from "./api/users.js";
import { useNavigate } from "react-router-dom";
import { loginUser } from "./api/users.js";
import { useSelector, useDispatch } from "react-redux";
import { addUserId } from "./redux/features/cart/cartSlice.js";

import Manfred from "./test/Manfred.jsx";

export default function App() {
  const [user, setUser] = useState(null);
  const cartUserId = useSelector((state) => state.cart.userId);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // page refresh App.js will check for token
  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
      dispatch(addUserId(user.id));

      console.log(user);
    };
    fetchUser();
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/sign-in");
  };

  // drill this down to the sign-in page
  // const handleSignIn = async (formData) => {
  //   const user = await loginUser(formData);
  //   setUser(user);

  //   navigate("/");
  //   console.log("I called the useEffect in App.js");
  // };

  return (
    <div className="bg-gray-100">
      <Nav user={user} handleLogOut={handleLogOut} />
      <Routes>
        <Route path="/" element={<HomePage user={user} />} />
        <Route path="/search" element={<SearchPage />} />
        <Route
          path="/search/wine-detail/:id"
          element={<WineDetailPage user={user} />}
        />
        <Route path="/favorites" element={<FavoritesPage user={user} />} />
        <Route
          path="/registration"
          element={<RegistrationPage setUser={setUser} />}
        />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route
          path="/shopping-cart"
          element={<ShoppingCartPage user={user} />}
        />
        {/* <Route path="/checkout" element={<CheckoutPage user={user} />} /> */}
        <Route
          path="/filter/:productType"
          element={<FilterPage user={user} />}
        />
        <Route path="/account-info" element={<AccountInfoPage user={user} />} />
        <Route path="/manfred" element={<Manfred />} />
      </Routes>
      <Footer />
    </div>
  );
}
