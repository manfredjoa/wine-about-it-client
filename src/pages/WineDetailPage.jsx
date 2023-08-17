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
  const favorites = useSelector((state) => state.favorites.inFavorites);
  const favoritesArray = useSelector((state) => state.favorites.allInFavorites);
  console.log(favoritesArray);

  const [wine, setWine] = useState({});
  const [count, setCount] = useState(1);
  const [heartToggle, setHeartToggle] = useState();
  const [addToCart, setAddToCart] = useState(false);
  let { id } = useParams();

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

  const dispatch = useDispatch();
  const wineId = wine._id;

  const handleAddToFavorites = async () => {
    console.log(wineId);
    console.log(user.id);

    try {
      await updateFavorites(user.id, wineId);
    } catch (error) {}
  };

  const handleRemoveFromFavorites = async () => {
    const wineId = wine._id;
    console.log(wineId);
    console.log(user.id);
    try {
      await deleteFavorites(user.id, wineId);
    } catch (error) {}
  };

  const handleHeart = () => {
    if (heartToggle) {
      handleRemoveFromFavorites();
      dispatch(removeFavorites(wineId));
      console.log(favoritesArray);
    } else {
      handleAddToFavorites();
      dispatch(addFavorites(wineId));
      console.log(favoritesArray);
    }
    setHeartToggle(!heartToggle);
  };

  const handleAddToCart = () => {
    const { _id, Price } = wine;
    dispatch(addItems({ id: _id, price: Price, quantity: count }));
    setAddToCart(true);
    console.log(_id, Price, count);
  };

  return (
    <div className="flex flex-row" style={{ color: "rgb(96, 20, 30)" }}>
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
        <Typography variant="h3">{wine.WineName}</Typography>

        <Typography>
          <img src={wine.flag} alt="Flag" className="" />
        </Typography>

        <Typography>
          <strong>Product Type</strong>: {wine.ProductType}
        </Typography>

        <Popover placement="right">
          <PopoverHandler onClick={handleHeart}>
            {!heartToggle ? (
              <button
                // onClick={handleHeart}
                class=" w-11 middle none center flex items-center rounded-lg p-3 font-sans text-xs font-bold uppercase text-black-500 transition-all hover:bg-black-500/10 active:bg-black-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-dark="true"
              >
                <i class="fas fa-heart text-lg leading-none"></i>
              </button>
            ) : (
              <div className="flex items-center">
                <button
                  // onClick={handleHeart}
                  class=" w-11 middle none center flex items-center rounded-lg p-3 font-sans text-xs font-bold uppercase text-red-700 transition-all hover:bg-red-700/10 active:bg-red-700/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-dark="true"
                >
                  <i class="fas fa-heart text-lg leading-none"></i>
                </button>
                {/* <Typography>Added to favorites</Typography> */}
              </div>
            )}
          </PopoverHandler>
          {!heartToggle ? (
            <PopoverContent>
              <Typography style={{ color: "rgb(96, 20, 30)" }}>
                Added to favorites
              </Typography>
            </PopoverContent>
          ) : (
            <PopoverContent>
              <Typography style={{ color: "rgb(96, 20, 30)" }}>
                Removed from favorites
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

        {/* onClick does not work inside Popover unfortunately */}
        {/* <Popover placement="right">
          <PopoverHandler> */}
        <div className="flex items-center">
          <Button
            onClick={handleAddToCart}
            variant="outlined"
            className="rounded-none w-2/5"
          >
            Add to Cart
          </Button>
          {addToCart ? (
            <Typography className="ml-5">Added {count} to cart</Typography>
          ) : null}
        </div>
        {/* </PopoverHandler>
          <PopoverContent>
            <Typography style={{ color: "rgb(96, 20, 30)" }}>
              Added {count} {wine.wineName} to cart
            </Typography> */}
        {/* </PopoverContent>
        </Popover> */}

        <Typography>
          <strong>Description</strong>: {wine.Description}
        </Typography>
      </div>
    </div>
  );
}
