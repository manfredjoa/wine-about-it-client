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
        <Card className="w-full bg-gray-100" style={{ height: "55vh" }}>
          <div className="bg-black text-white text-center py-6 font-bold text-3xl">
            Order History
          </div>
          <CardBody className="overflow-scroll">
            <div className=" py-4 text-gray-600">
              {orders.map((order, index) => (
                <div key={index}>
                  <h1 style={{ color: "rgb(96, 20, 30)" }}>
                    Order ID: {order._id} <br />
                    Cart Quantity: {order.cartQuantity} <br />
                    Total: ${order.total} <br />
                    Shipping Status: {order.isShipped
                      ? " Shipped"
                      : " Pending"}{" "}
                    <br />
                    Delivered: {order.isDelivered ? "Yes" : "No"}
                  </h1>
                  <hr className="w-full h-0.5 bg-gray-300" />
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
