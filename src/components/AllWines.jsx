import React from "react";
import { Link } from "react-router-dom";

function AllWines() {
  return (
    <div>
      <Link to="/filter/all">
        <img
          src="https://i.imgur.com/RgmX0Q3.jpg"
          alt="All Wines"
          className="w-32 h-32"
        />
      </Link>
    </div>
  );
}

export default AllWines;