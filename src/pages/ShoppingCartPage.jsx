import { useSelector } from "react-redux";
import { getWine } from "../api/api";

import { useState, useEffect, useRef } from "react";
import WineDetailShopping from "../components/WineDetailShopping";
import { Button } from "@material-tailwind/react";
import { useNavigate, useLocation } from "react-router-dom";
import CheckoutPage from "./CheckoutPage";

export default function ShoppingCart() {
  const cartQuantity = useSelector((state) => state.cart.cartQuantity);
  const cartTotal = useSelector((state) => state.cart.cartTotal);
  const items = useSelector((state) => state.cart.items);
  const [theFetchedWines, setTheFetchedWines] = useState([]);
  const navigate = useNavigate();
  const [checkout, setCheckout] = useState(false);

  useEffect(() => {
    fetchWines();
  }, []);

  const fetchWines = async () => {
    const cartItems = items.map((item) => item._id);

    const wineByIdPromise = cartItems.map(getWine);

    console.log(wineByIdPromise);

    const fetchedWines = await Promise.all(wineByIdPromise);
    setTheFetchedWines(fetchedWines);
    console.log(fetchedWines);
    console.log(theFetchedWines);
  };

  const itemsInfo = theFetchedWines.map((wine) => {
    const item = items.find((item) => item._id === wine._id);
    return { ...wine, quantity: item.quantity };
  });

  const handleCheckout = () => {
    setCheckout(true);
  };

  console.log("Cart Items: ", cartQuantity);
  console.log("Cart Totals: ", cartTotal);

  console.log("ALL OBJECT", itemsInfo);

  const handleRemoveState = () => {
    localStorage.removeItem("persist:root");
    window.location.reload();
  };
  return (
    <div>
      {!checkout ? (
        <div>
          <h1>Shopping Cart</h1>
          <div>
            {itemsInfo.map((item, key) => (
              <WineDetailShopping key={item._id} index={key} itemInfo={item} />
            ))}
          </div>
          <div>
            {cartQuantity}
            <br />
            {cartTotal}
          </div>
          <Button onClick={handleRemoveState}>Clear</Button>
          <Button onClick={handleCheckout}>Check-Out</Button>
        </div>
      ) : (
        <CheckoutPage />
      )}
    </div>
  );
}
