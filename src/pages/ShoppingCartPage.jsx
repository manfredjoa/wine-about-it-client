import { useSelector } from "react-redux";

export default function ShoppingCart() {
  const cartValue = useSelector((state) => state.cart.value);

  return (
    <div>
      ShoppingCart
      <div>Value: {cartValue}</div> {/* Displaying the value */}
    </div>
  );
}
