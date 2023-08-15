import React, { useEffect, useState } from "react";
import WineDetail from "../components/WineDetail";
import { getWine, getFavorites, addFavorite } from "../api/api";
import {getUser} from "../api/users"
export default function FavoritesPage({user}) {
  const [wines, setWines] = useState([]);
  const [favorites, setFavorites] = useState([]);


  console.log(user)

  useEffect(() => {
    const fetchWines = async () => {
      try {
        // Fetch the user's favorite wines
        const fetchedFavorites = await getFavorites();
        setFavorites(fetchedFavorites);

        // Call the getWine function for each favorite wine
        const winePromises = fetchedFavorites.map((favorite) =>
          getWine(favorite.productId)
        );
        const fetchedWines = await Promise.all(winePromises);
        setWines(fetchedWines);
      } catch (error) {
        console.log("An error occurred while fetching wines:", error);
      }
    };
    fetchWines();
  }, [user]);

  return (
    <div>
      <div>
        <h1 className="text-5xl font-bold mb-10 font-mono">YOUR WISH LIST</h1>
      </div>
      <div className="grid grid-cols-4 gap-x-40 gap-y-4 mx-40 pt-32 ">
        {wines.map((wine, index) => (
          <div className="wine-container" key={index}>
            <WineDetail wine={wine} />
            {!favorites.some((favorite) => favorite.productId === wine._id) && (
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
              >
                Add to Favorites
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
