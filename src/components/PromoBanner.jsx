import React from "react";

export default function PromoBanner() {
 
  return (
    <div className="text-white py-3 flex justify-center space-x-4 bg-black" >
      <p className="text-center">Free shipping over $50</p>
      <div className="border-l h-5"></div>
      <p className="text-center">24/7 Customer Support</p>
      <div className="border-l h-5"></div>
      <p className="text-center">Over 200 Wines in Our Collection</p>
    </div>
  );
}
