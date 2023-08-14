import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../redux/features/cart/cartSlice.js";

export default function WineDetail({ wine }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <div onClick={() => navigate(`/search/wine-detail/${wine._id}`)}>
      <div className="flex flex-row">
        <img className="h-80" src={wine.img} alt={wine.WineName} />
        <div className="flex flex-col">
          <p className="text-xl">{wine.Price}</p>
          <p className="font-bold text-2xl">{wine.WineName}</p>
        </div>
        <div>
          <Button>Add to Cart</Button>
          <Button>Add to Favorites</Button>
          <button onClick={() => dispatch(increment())}>Add 1 </button>
          <br />
          <button onClick={() => dispatch(decrement())}>Subtract 1 </button>
        </div>
      </div>
    </div>
  );
}
