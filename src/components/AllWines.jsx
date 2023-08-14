import { Link } from "react-router-dom";

export default function AllWines() {
  return (
    <div className="w-40 h-40">
      <Link to="/filter/all">
        <img
          src="https://i.imgur.com/RgmX0Q3.jpg"
          alt="All Wines"
          className="w-full h-full object-cover"
        />
      </Link>
    </div>
  );
}
