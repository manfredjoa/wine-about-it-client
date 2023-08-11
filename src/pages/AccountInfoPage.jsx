import React from 'react';
import OrderHistoryCard from '../components/accountInfo/OrderHistory';
import Nav from '../layouts/Nav';
import Footer from '../layouts/Footer';

const AccountInfoPage = () => {
  {/*Replace Mock Orders*/}
  const mockOrders = [
    {
      productName: 'LaCrema Chardonnay',
      total: 50.0,
      orderNumber: 'GDSF54329',
      status: 'Shipped',
    },
    {
      productName: 'Prisoner Red Blend',
      total: 150.0,
      orderNumber: 'GSKF43400',
      status: 'Delivered',
    },
    {
      productName: 'Trimabach Riesling',
      total: 75.0,
      orderNumber: 'AKADFN3230',
      status: 'Processing',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex-grow">
        <OrderHistoryCard orders={mockOrders} />
      </div>
      <Footer />
    </div>
  );
};

export default AccountInfoPage;