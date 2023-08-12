import React from "react";
import { Link } from "react-router-dom";

function RoseWines() {
  return (
    <div>
      <Link to="/filter/rose">
        <img
          src="https://i.imgur.com/ByfizrF.jpg"
          alt="Rose Wines"
          className="w-32 h-32"
        />
      </Link>
    </div>
  );
}

export default RoseWines;