import { useParams } from "react-router-dom";
import { getWine } from "../api/api";
import { updateFavorites, deleteFavorites } from "../api/users";
import { useEffect, useState } from "react";
import { addItems } from "../redux/features/cart/cartSlice.js";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorites,
  removeFavorites,
} from "../redux/features/user/favoritesSlice";
import {
  Button,
  Typography,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";

export default function WineDetail({ user }) {
  const favoritesArray = useSelector((state) => state.favorites.allInFavorites);

  const [wine, setWine] = useState({});
  const [count, setCount] = useState(1);
  const [heartToggle, setHeartToggle] = useState();
  const [addToCart, setAddToCart] = useState(false);
  const dispatch = useDispatch();
  let { id } = useParams();
  const wineId = wine._id;

  useEffect(() => {
    fetchWine();
    if (favoritesArray.includes(id)) {
      setHeartToggle(true);
    } else {
      setHeartToggle(false);
    }
  }, []);

  async function fetchWine() {
    const oneWine = await getWine(id);
    setWine(oneWine);
  }

  const handlePlus = () => {
    setCount(count + 1);
    setAddToCart(false);
  };

  const handleMinus = () => {
    if (count > 1) {
      setCount(count - 1);
      setAddToCart(false);
    }
  };

  const handleAddToFavorites = async () => {
    try {
      await updateFavorites(user.id, wineId);
    } catch (error) {}
  };

  const handleRemoveFromFavorites = async () => {
    const wineId = wine._id;
    try {
      await deleteFavorites(user.id, wineId);
    } catch (error) {}
  };

  const handleHeart = () => {
    if (heartToggle) {
      handleRemoveFromFavorites();
      dispatch(removeFavorites(wineId));
    } else {
      handleAddToFavorites();
      dispatch(addFavorites(wineId));
    }
    setHeartToggle(!heartToggle);
  };

  const handleAddToCart = () => {
    const { _id, Price } = wine;
    dispatch(addItems({ id: _id, price: Price, quantity: count }));
    setAddToCart(true);
  };

  return (
    <div
      className="flex flex-row"
      style={{
        color: "rgb(96, 20, 30)",
      }}
    >
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
        className="flex flex-col w-2/4 justify-evenly py-5 pr-5"
        style={{ height: "80vh" }}
      >
        <Typography
          variant="h3"
          style={{ fontFamily: "'HelpUsGiambattista', sans-serif" }}
        >
          {wine.WineName}
        </Typography>

        <Typography>
          <img src={wine.flag} alt="Flag" className="" />
        </Typography>

        <Typography style={{ fontFamily: "'HelpUsGiambattista', sans-serif" }}>
          <strong>Product Type</strong>: {wine.ProductType}
        </Typography>

        <Popover placement="right">
          <PopoverHandler className="w-11" onClick={handleHeart}>
            {!heartToggle ? (
              <button
                class=" w-11 middle none center flex items-center rounded-lg p-3 font-sans text-xs font-bold uppercase text-black-500 transition-all hover:bg-black-500/10 active:bg-black-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-dark="true"
              >
                <i class="fas fa-heart text-lg leading-none"></i>
              </button>
            ) : (
              <div className="flex items-center">
                <button
                  class=" w-11 middle none center flex items-center rounded-lg p-3 font-sans text-xs font-bold uppercase text-red-700 transition-all hover:bg-red-700/10 active:bg-red-700/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-dark="true"
                >
                  <i class="fas fa-heart text-lg leading-none"></i>
                </button>
              </div>
            )}
          </PopoverHandler>
          {!heartToggle ? (
            <PopoverContent>
              <Typography
                style={{
                  color: "rgb(96, 20, 30)",
                  fontFamily: "'HelpUsGiambattista', sans-serif",
                }}
              >
                Removed from favorites
              </Typography>
            </PopoverContent>
          ) : (
            <PopoverContent>
              <Typography
                style={{
                  color: "rgb(96, 20, 30)",
                  fontFamily: "'HelpUsGiambattista', sans-serif",
                }}
              >
                Added to favorites
              </Typography>
            </PopoverContent>
          )}
        </Popover>

        <Typography variant="lead" className="text-green-500">
          ${wine.Price}
        </Typography>

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
            style={{ fontFamily: "'HelpUsGiambattista', sans-serif" }}
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

        <Popover>
          <PopoverHandler onClick={handleAddToCart}>
            <div className="flex items-center">
              <Button
                variant="outlined"
                className="rounded-none w-2/5"
                style={{ fontFamily: "'HelpUsGiambattista', sans-serif" }}
              >
                Add to Cart
              </Button>
            </div>
          </PopoverHandler>
          <PopoverContent>
            <Typography
              style={{
                color: "rgb(96, 20, 30)",
                fontFamily: "'HelpUsGiambattista', sans-serif",
              }}
            >
              Added {count} to cart
            </Typography>
          </PopoverContent>
        </Popover>

        <Typography style={{ fontFamily: "'HelpUsGiambattista', sans-serif" }}>
          <strong>Description</strong>: {wine.Description}
        </Typography>
      </div>
    </div>
  );
}
