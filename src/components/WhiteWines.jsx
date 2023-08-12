import React from "react";
import { Link } from "react-router-dom";

function WhiteWines() {
  return (
    <div className="w-40 h-40">
      <Link to="/filter/white">
        <img
          src="https://i.imgur.com/dsmCu80.jpg"
          alt="White Wines"
          className="w-full h-full object-cover"
        />
      </Link>
    </div>
  );
}

export default WhiteWines;