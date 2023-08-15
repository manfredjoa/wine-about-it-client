import React, { useState, useEffect, useContext } from "react";
import OrderHistory from "../components/accountInfo/OrderHistory";
import Favorites from "../components/accountInfo/Favorites";
import UserInfoCard from "../components/accountInfo/UserInfo";
import { removeFavorite, getFavorites, getUserInfo, addFavorite } from "../api/api";

const user = ""

export default function AccountInfoPage() {
  const [userInfo, setUserInfo] = useState({});
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (user) {
      const userId = user.userId;

      getUserInfo(userId)
        .then((userData) => setUserInfo(userData))
        .catch((error) => console.error("Error fetching user data:", error));

      getFavorites(userId)
        .then((userFavorites) => setFavorites(userFavorites))
        .catch((error) => console.error("Error fetching user favorites:", error));
    }
  }, [user]);

  const handleRemoveFavorite = async (productId) => {
    try {
      await removeFavorite(user.userId, productId);

      setFavorites((prevFavorites) =>
        prevFavorites.filter((favorite) => favorite.productId !== productId)
      );
    } catch (error) {
      console.error("Error removing favorite:", error);
    }
  };

  const handleAddFavorite = async (productId) => {
    try {
      await addFavorite(user.userId, productId);

      setFavorites((prevFavorites) => [...prevFavorites, { productId }]);
    } catch (error) {
      console.error("Error adding favorite:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gray-100 py-4 flex justify-center text-uppercase">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-uppercase">
            {userInfo.firstName}'s Account
          </h2>
        </div>
      </div>

      <div>
        <div className="flex space-x-6 py-8 px-4">
          <UserInfoCard user={userInfo} />
          <OrderHistory />
          <Favorites
            favorites={favorites}
            onRemoveFavorite={handleRemoveFavorite}
            onAddFavorite={handleAddFavorite}
          />
        </div>
      </div>
    </div>
  );
}
