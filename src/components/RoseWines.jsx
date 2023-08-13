import React from "react";
import { Link } from "react-router-dom";

function RoseWines() {
  return (
    <div className="w-40 h-40">
      <Link to="/filter/rose">
        <img
          src="https://i.imgur.com/ByfizrF.jpg"
          alt="Rose Wines"
          className="w-full h-full object-cover"
        />
      </Link>
    </div>
  );
}

export default RoseWines;
