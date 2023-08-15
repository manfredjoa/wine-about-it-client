import { useNavigate } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../redux/features/cart/cartSlice.js";

export default function WineDetail({ wine }) {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const count = useSelector((state) => state.counter.value);
  return (
    <div
      className="flex flex-col text-center gap-y-2.5 mt-5 bg-white w-80"
      // style={{ width: "320px" }}
      onClick={() => navigate(`/search/wine-detail/${wine._id}`)}
    >
      <img
        className="object-contain mt-5"
        src={wine.img}
        alt={wine.WineName}
        style={{ height: "50vh" }}
      />
      <Typography>{wine.WineName}</Typography>
      <Typography>{wine.Price}</Typography>
    </div>
  );
}
