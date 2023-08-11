import React from 'react';
import OrderHistoryCard from '../components/accountInfo/OrderHistory';
import FavoritesCard from '../components/accountInfo/Favorites';
import Nav from '../layouts/Nav';
import Footer from '../layouts/Footer';

const AccountInfoPage = () => {
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

  const favorites = [
    {
      productName: 'Silver Oak Cabernet Sauvignon',
      price: 120.0,
      productId: '5656y',
    },
    {
      productName: 'Opus One Red Blend',
      price: 300.0,
      productId: '5y5bfb',
    },
    {
      productName: 'Caymus Special Selection Cabernet Sauvignon',
      price: 150.0,
      productId: '56ey565',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex space-x-6 py-8 px-4">
        <OrderHistoryCard orders={mockOrders} />
        <FavoritesCard favorites={favorites} />
      </div>
      <Footer />
    </div>
  );
};

export default AccountInfoPage;