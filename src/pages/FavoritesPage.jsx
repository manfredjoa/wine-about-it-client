import WineDetail from "../components/WineDetail";
import { getWine } from "../api/api";
import { useEffect, useState } from "react";

export default function Favorites() {
  const [wines, setWines] = useState([]);
  const monckData = {
    _id: "64d40dc30c20b0aba954e217",
    UserName: "Alantothe",
    EMail: "alanmalpartida@gmail.com",
    Password: "$2b$10$2DaGO.tNwpIQFg/ZpTN/8uJ6yMNJXvrP/MzwTiWKnhd2O8XqHxMPG",
    Favorites: [
      "64d404d5962ba4705fca0ecc",
      "64d404d5962ba4705fca0ed6",
      "64d404d5962ba4705fca0ef1",
      "64d404d5962ba4705fca0ef1",
    ],
    __v: 0,
  };
  useEffect(() => {
    const fetchWines = async () => {
      try {
        // call the getWine function for each wine in the favorites array
        const winePromises = monckData.Favorites.map(getWine);
        // able to call mulitlple  calls promise.all to wait for all promises to resolve,
        const fetchedWines = await Promise.all(winePromises);

        setWines(fetchedWines);
      } catch (error) {
        console.log("An error occurred while fetching wines:", error);
      }
    };

    fetchWines();
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-5xl font-bold mb-10 font-mono">YOUR WISH LIST</h1>
      </div>
      <div className="grid grid-cols-4 gap-x-40 gap-y-4 mx-40 pt-32 ">
        {wines.map((wine, index) => (
          <div className="wine-container" key={index}>
            <WineDetail wine={wine} />
          </div>
        ))}
      </div>
    </div>
  );
}
