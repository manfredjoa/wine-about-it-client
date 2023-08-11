import React, { useState } from 'react';
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

const FavoritesCard = ({ favorites }) => {
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
    <Card className="w-1/3">
      <div className="bg-gray-500 text-white text-center py-2 font-bold">
        Favorites
      </div>
      <CardBody>
        {last3Favorites.map((favorite, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <Link
                to={`/wine/${favorite.productId}`}
                className="block text-blue-500 hover:underline"
              >
                <Typography color="blue-gray" className="font-medium">
                  {favorite.productName}
                </Typography>
              </Link>
              <button
                onClick={() => toggleFavorite(favorite.productId)}
                className="focus:outline-none"
              >
                <FontAwesomeIcon
                  icon={
                    favoriteMap[favorite.productId] ? faHeart : farHeart
                  }
                  className={`text-lg ${
                    favoriteMap[favorite.productId]
                      ? 'text-red-500'
                      : 'text-gray-500'
                  }`}
                />
              </button>
            </div>
            <Typography color="blue-gray" className="font-medium">
              ${favorite.price}
            </Typography>
          </div>
        ))}
      </CardBody>
      <div className="flex justify-center mt-4">
        <Link to="/favorites" className="text-blue-500 hover:underline">
          <div className="px-2 py-1 hover:bg-blue-100 rounded-md">
            View All Favorites
          </div>
        </Link>
      </div>
    </Card>
  );
};

export default FavoritesCard;
