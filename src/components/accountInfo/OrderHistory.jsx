import React from 'react';
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const OrderHistoryCard = ({ orders }) => {
  if (!orders || orders.length === 0) {
    return <div>No order history available.</div>;
  }

  const handleReorder = (order) => {
    // Handle reorder action (e.g., add to cart, redirect to checkout, etc.)
    console.log('Reordering:', order);
  };

  // Display the last three orders
  const lastThreeOrders = orders.slice(Math.max(orders.length - 3, 0));

  return (
    <Card className="w-1/3">
      <div className="bg-gray-500 text-white text-center py-2 font-bold">
        Order History
      </div>
      <CardBody>
        {lastThreeOrders.map((order, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-center mb-2">
              {/* Clickable link to Wine Detail Page */}
              <Link to={`/wine/${order.productId}`} className="block text-blue-500 hover:underline">
                <Typography color="blue-gray" className="font-medium">
                  {order.productName}
                </Typography>
              </Link>
              <Button
                onClick={() => handleReorder(order)}
                color="blue"
                className="ml-2"
              >
                Reorder
              </Button>
            </div>
            <Typography color="blue-gray" className="font-medium">
              ${order.total}
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              Order Number: {order.orderNumber}
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              Status: {order.status}
            </Typography>
          </div>
        ))}
      </CardBody>
      {/* Clickable div to navigate to order history page */}
      <div className="flex justify-center mt-4">
        <Link to="/order-history" className="text-black-500">
          <div className="px-10 py-15 rounded-md">
            View Order History
          </div>
        </Link>
      </div>
    </Card>
  );
};

export default OrderHistoryCard;
