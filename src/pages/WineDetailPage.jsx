import { useParams } from "react-router-dom";
import { getWine } from "../api/api";
import { updateFavorites } from "../api/users";
import { useEffect, useState } from "react";
import { addItems } from "../redux/features/cart/cartSlice.js";
import { useDispatch } from "react-redux";
import { Button } from "@material-tailwind/react";

export default function WineDetail({ user }) {
  const [wine, setWine] = useState({});
  const [count, setCount] = useState(0);
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
    setCount(count - 1);
  };

  const dispatch = useDispatch();

  // const addToFavorites = async () => {
  //   console.log(user.id); // userID
  //   console.log(id); // wineID
  //   const response = await updateFavorites(user.id, id);
  //   console.log(response);
  //   return response;
  // };

  // const handleAddToFavorites = () => {
  //   addToFavorites();
  // };

  const handleAddToCart = () => {
    const { _id, Price } = wine;
    dispatch(addItems({ id: _id, price: Price, quantity: count }));
    console.log(_id, Price, count);
  };

  return (
    <div className="mx-20 mt-10">
      <div className="flex p-4 max-w-4xl mx-auto mb-10 ml-auto">
        <div className="flex-1">
          <img
            src={wine.img}
            alt={wine.WineName}
            className="w-1/2 h-auto object-cover"
          />
        </div>

        <div className="flex-1 text-center">
          <h1 className="text-2xl font-italic mb-8 font-mono">
            {wine.WineName}
          </h1>

          <div className="text-left mb-4">
            <img src={wine.flag} alt="Flag" className="w-1/4 md:w-1/6 h-auto" />
          </div>

          <p className="mb-2 text-2xl text-left">
            <span className="font-bold">Price:</span> {wine.Price}
          </p>

          <p className="mb-2 text-2xl font-serif text-left">
            <span className="font-bold">Product Type:</span> {wine.ProductType}
          </p>

          <div className="flex items-center mt-4">
            <p className="text-lg font-semibold mr-2 ">Rating:</p>

            <div className="flex"></div>
          </div>
          <div>
            <Button onClick={handleMinus}>-</Button>
            {count}
            <Button onClick={handlePlus}>+</Button>
          </div>
          <Button>Add to Favorites</Button>
          <Button
            onClick={handleAddToCart}
            className="bg-black hover:bg-red-800 text-white py-5 px-10 mt-6 rounded-md"
          >
            Add to Cart
          </Button>
          <p className="mb-6 text-1xl font-serif ">
            <span className="font-bold">Description:</span> {wine.Description}
          </p>
        </div>
      </div>
    </div>
  );
}
