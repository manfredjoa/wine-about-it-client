import React from "react";

const PromoBar = () => {
  return (
    <div className="bg-black text-white py-2 text-center flex justify-center items-center">
      <p className="mx-4">
        Free Shipping on all orders over $50
      </p>
      <span className="border border-white h-8 inline-block"></span>
      <p className="mx-4">
        Save 25% on your first order when you sign up for our Newsletter!
      </p>
      <span className="border border-white h-8 inline-block"></span>
      <p className="mx-4">
        Over 200 Wines in our Collection
      </p>
    </div>
  );
};

export default PromoBar;
