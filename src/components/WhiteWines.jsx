import React from "react";
import { Link } from "react-router-dom";

function WhiteWines() {
  return (
    <div>
      <Link to="/filter/white">
        <img
          src="https://i.imgur.com/dsmCu80.jpg"
          alt="White Wines"
          className="w-32 h-32"
        />
      </Link>
    </div>
  );
}

export default WhiteWines;