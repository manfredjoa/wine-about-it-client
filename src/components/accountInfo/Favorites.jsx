import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { getUser } from "../../api/users";
import { getWine } from "../../api/api";

export default function Favorites({ user }) {
  const [fetchedUser, setFetchedUser] = useState();
  const [wines, setWines] = useState([]);

  useEffect(() => {
    if (user) {
      fetchUser();
      fetchWines();
    }
  }, [user]);

  const fetchUser = async () => {
    const theUser = await getUser(user.id);
    setFetchedUser(theUser);
  };

  const fetchWines = async () => {
    try {
      const winePromises = fetchedUser.favorites.map(getWine);
      const fetchedWines = await Promise.all(winePromises);
      setWines(fetchedWines);
    } catch (error) {
      console.log("An error occurred while fetching wines:", error);
    }
  };

  return (
    <div>
      {wines ? (
        <Card className="w-full bg-gray-100" style={{ height: "55vh" }}>
          <div className="bg-black text-white text-center py-6 font-bold text-3xl">
            My Favorites
          </div>
          <CardBody className="overflow-scroll">
            <div className="text-center py-4 text-gray-600">
              {wines.map((wine, index) => (
                <div className="flex items-center" key={index}>
                  <img className="h-10 w-10 object-contain" src={wine.img} />
                  <p style={{ color: "rgb(96, 20, 30)" }}>{wine.WineName}</p>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      ) : (
        <Card className="w-full">
          <div className="bg-black text-white text-center py-6 font-bold text-3xl">
            My Favorites
          </div>
          <CardBody className="flex flex-col">No favorites available.</CardBody>
        </Card>
      )}
    </div>
  );
}
