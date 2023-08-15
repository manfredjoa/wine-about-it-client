import { useParams } from "react-router-dom";
import { getWine } from "../api/api";
import { useEffect, useState } from "react";
import { addFavorite } from "../api/api";

export default function WineDetail() {
  const [wine, setWine] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);

  let { id } = useParams();

  useEffect(() => {
    fetchWine();
  }, []);

  async function fetchWine() {
    const oneWine = await getWine(id);
    setWine(oneWine);
    // You can check here whether the fetched wine is in the favorites and set isFavorite accordingly
    // For example, if you have a function to check if a wine is a favorite, you can do:
    // const isCurrentlyFavorite = await checkIfFavorite(wine.id);
    // setIsFavorite(isCurrentlyFavorite);
  }

  const handleAddFavorite = async () => {
    try {
      await addFavorite(wine); // Make sure you have a function like this

      setIsFavorite(true);
    } catch (error) {
      console.error("Error adding favorite:", error);
    }
  };

  return (
    <div className="mx-20 mt-10">
      <div className="flex p-4 max-w-4xl mx-auto mb-10">
        <div className="flex-1 pr-4">
          <img
            src={wine.img}
            alt={wine.WineName}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="flex-1 text-center">
          <h1 className="text-5xl font-bold mb-10 font-mono">
            {wine.WineName}
          </h1>
          <p className="mb-2 text-3xl">
            <span className="font-bold">Price:</span> {wine.Price}
          </p>

          <img src={wine.flag} alt="Flag" />

          <p className="mb-2 text-3xl">
            <span className="font-bold">ProductType:</span> {wine.ProductType}
          </p>
          <p className="mb-2 text-3xl">
            <span className="font-bold">Description:</span> {wine.Description}
          </p>
        </div>
      </div>
    </div>
  );
}
