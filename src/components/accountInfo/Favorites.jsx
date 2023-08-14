import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

export default function Favorites({ favorites }) {
  const initialFavoriteMap = favorites.reduce((map, favorite) => {
    map[favorite.productId] = true;
    return map;
  }, {});

  const [favoriteMap, setFavoriteMap] = useState(initialFavoriteMap);

  const toggleFavorite = (productId) => {
    setFavoriteMap((prevMap) => ({
      ...prevMap,
      [productId]: !prevMap[productId],
    }));
  };

  if (!favorites || favorites.length === 0) {
    return <div>No favorites available.</div>;
  }

  const last3Favorites = favorites.slice(Math.max(favorites.length - 3, 0));

  return (
    <Card className="w-full">
      <div className="bg-gray-500 text-white text-center py-6 font-bold text-3xl">
        Favorites
      </div>
      <CardBody className="flex flex-col">
        {last3Favorites.map((favorite, index) => (
          <div key={index} className="mb-4">
            <div className="flex items-center justify-between">
              <Link
                to={`/wine/${favorite.productId}`}
                className="block text-black-500 hover:underline"
              >
                <Typography color="black-gray" className="font-medium">
                  {favorite.productName}
                </Typography>
              </Link>
              <button
                onClick={() => toggleFavorite(favorite.productId)}
                className="focus:outline-solid"
              >
                <FontAwesomeIcon
                  icon={favoriteMap[favorite.productId] ? faHeart : farHeart}
                  className={`text-lg ${
                    favoriteMap[favorite.productId]
                      ? "text-red-500"
                      : "text-gray-500"
                  }`}
                />
              </button>
            </div>
            <hr className="w-full h-0.5 bg-gray-300 mt-2" />
          </div>
        ))}
      </CardBody>
      <div className="flex justify-center mt-4">
        <Button
          color="gray"
          className="bg-gray-300 hover:bg-gray-400 border-none rounded-none text-gray-700 hover:text-black-500"
          ripple="light"
        >
          <Link to="/favorites">View All Favorites</Link>
        </Button>
      </div>
    </Card>
  );
}
