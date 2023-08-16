import { useState, useEffect } from "react";
import { Card, CardBody } from "@material-tailwind/react";
import { orderByUser } from "../../api/orders";

export default function OrderHistory({ user }) {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const userOrders = await orderByUser(user.id);
    setOrders(userOrders);
  };

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  return (
    <div>
      {orders ? (
        <Card className="w-full">
          <div className="bg-black text-white text-center py-6 font-bold text-3xl">
            Order History
          </div>
          <CardBody>
            <div className="text-center py-4 text-gray-600">
              {orders.map((order, index) => (
                <div key={index}>
                  <h1>
                    Order ID: {order._id} Total: ${order.total} Shipping Status:{" "}
                    {order.isShipped ? " Shipped" : " Pending"}
                  </h1>
                  <h1>
                    Cart Quantity: {order.cartQuantity} Delivered:{" "}
                    {order.isDelivered ? "Yes" : "No"}
                  </h1>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      ) : (
        <Card className="w-full">
          <div className="bg-black text-white text-center py-6 font-bold text-3xl">
            Order History
          </div>
          <CardBody className="flex flex-col">
            No order history available.
          </CardBody>
        </Card>
      )}
    </div>
  );
}
