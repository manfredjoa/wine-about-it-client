import React, { useState, useEffect } from "react";
import OrderHistory from "../components/accountInfo/OrderHistory";
import Favorites from "../components/accountInfo/Favorites";
import UserInfoCard from "../components/accountInfo/UserInfo";

export default function AccountInfoPage({ user }) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gray-100 py-4 flex justify-center text-uppercase">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-uppercase">
            My Account My Account
          </h2>
        </div>
      </div>

      <div>
        <div className="flex space-x-6 py-8 px-4">
          <UserInfoCard user={user} />
          <OrderHistory user={user} />
          <Favorites user={user} />
        </div>
      </div>
    </div>
  );
}
