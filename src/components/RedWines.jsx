import React from "react";
import { Link } from "react-router-dom";

function RedWines() {
  return (
    <div>
      <Link to="/filter/red">
        <img
          src="https://i.imgur.com/hfqd8Os.jpg"
          alt="Red Wines"
          className="w-32 h-32"
        />
      </Link>
    </div>
  );
}

export default RedWines;