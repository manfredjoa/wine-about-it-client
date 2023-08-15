import { useParams } from "react-router-dom";
import { getWine } from "../api/api";
import { updateFavorites } from "../api/users";
import { useEffect, useState } from "react";
import { addItems } from "../redux/features/cart/cartSlice.js";
import { useDispatch } from "react-redux";
import { Button, Typography } from "@material-tailwind/react";

export default function WineDetail({ user }) {
  const [wine, setWine] = useState({});
  const [count, setCount] = useState(1);
  let { id } = useParams();

  useEffect(() => {
    fetchWine();
  }, []);

  async function fetchWine() {
    const oneWine = await getWine(id);
    setWine(oneWine);
  }

  const handlePlus = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const dispatch = useDispatch();

  console.log(wine);

  const handleAddToFavorites = async () => {
    const wineId = wine._id;
    try {
      await updateFavorites(user.id, wineId);
      // Handle success (e.g., show a success message)
    } catch (error) {
      // Handle error (e.g., show an error message)
    }
  };

  const handleHeart = () => {
    console.log("heart");
    // pop up utilizing use state toggle and favorite/unfavorite functions
  };

  const handleAddToCart = () => {
    const { _id, Price } = wine;
    dispatch(addItems({ id: _id, price: Price, quantity: count }));
    console.log(_id, Price, count);
  };

  return (
    <div className="flex flex-row">
      <div
        className="w-2/4 flex justify-center items-center"
        style={{ height: "80vh" }}
      >
        <img
          src={wine.img}
          alt={wine.WineName}
          className=" object-cover"
          style={{ height: "70vh" }}
        />
      </div>

      <div
        className="flex flex-col w-2/4 justify-evenly"
        style={{ height: "80vh" }}
      >
        <Typography variant="h3">{wine.WineName}</Typography>

        <Typography>
          <img src={wine.flag} alt="Flag" className="" />
        </Typography>

        <Typography>Product Type: {wine.ProductType}</Typography>

        <button
          onClick={handleHeart}
          className="w-11 middle none center flex items-center rounded-lg p-3 font-sans text-xs font-bold uppercase text-red-700 transition-all hover:bg-red-700/10 active:bg-red-700/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-dark="true"
        >
          <i class="fas fa-heart text-lg leading-none"></i>
        </button>

        <Typography variant="lead">${wine.Price}</Typography>

        <div className="w-2/5 flex justify-between">
          <Button
            onClick={handleMinus}
            variant="outlined"
            className="rounded-none"
          >
            -
          </Button>
          <Button
            variant="outlined"
            className="rounded-none pointer-events-none"
          >
            {count}
          </Button>
          <Button
            onClick={handlePlus}
            variant="outlined"
            className="rounded-none"
          >
            +
          </Button>
        </div>

        <Button
          onClick={handleAddToCart}
          variant="outlined"
          className="rounded-none w-2/5"
        >
          Add to Cart
        </Button>

        <Typography>Description: {wine.Description}</Typography>
      </div>
    </div>
  );
}
