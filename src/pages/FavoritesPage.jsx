import WineDetail from "../components/WineDetail";
import { getWine } from "../api/api";
import { useEffect, useState } from "react";
import { getUser } from "../api/users";

export default function Favorites({ user }) {
  const [wines, setWines] = useState([]);

  const fetchWines = async () => {
    try {
      const calledUser = await getUser(user.id);

      console.log(calledUser);

      const { favorites } = calledUser;
      const winePromises = favorites.map(getWine);

      // able to call mulitlple  calls promise.all to wait for all promises to resolve,
      const fetchedWines = await Promise.all(winePromises);

      setWines(fetchedWines);
    } catch (error) {
      console.log("An error occurred while fetching wines:", error);
    }
  };
  useEffect(() => {
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
          </div>
        ))}
      </div>
    </div>
  );
}
