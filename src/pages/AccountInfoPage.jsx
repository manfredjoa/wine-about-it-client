import OrderHistoryCard from "../components/accountInfo/OrderHistory";
import FavoritesCard from "../components/accountInfo/Favorites";
import UserInfoCard from "../components/accountInfo/UserInfo";
import Layout from "../layouts/Layout";

export default function AccountInfoPage() {
  const mockOrders = [
    {
      productName: "LaCrema Chardonnay",
      total: 50.0,
      orderNumber: "GDSF54329",
      status: "Shipped",
    },
    {
      productName: "Prisoner Red Blend",
      total: 150.0,
      orderNumber: "GSKF43400",
      status: "Delivered",
    },
    {
      productName: "Trimabach Riesling",
      total: 75.0,
      orderNumber: "AKADFN3230",
      status: "Processing",
    },
  ];

  const favorites = [
    {
      productName: "Silver Oak Cabernet Sauvignon",
      price: 120.0,
      productId: "5656y",
    },
    {
      productName: "Opus One Red Blend",
      price: 300.0,
      productId: "5y5bfb",
    },
    {
      productName: "Caymus Special Selection Cabernet Sauvignon",
      price: 150.0,
      productId: "56ey565",
    },
  ];

  const userInfo = {
    firstName: "Daija",
    lastName: "Watt",
    email: "watt.daija@yahoo.com",
    shippingAddress: "3465 Duluth Hwy, Duluth, GA",
  };

  return (
    <Layout>
      <div className="flex flex-col min-h-screen">
        <div className="bg-gray-100 py-4 flex justify-center text-uppercase">
          <div className="max-w-screen-xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-uppercase">
              {userInfo.firstName}'s Account{" "}
            </h2>
          </div>
        </div>

        <div>
          <div className="flex space-x-6 py-8 px-4">
            <UserInfoCard user={userInfo} />
            <OrderHistoryCard orders={mockOrders} />
            <FavoritesCard favorites={favorites} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
