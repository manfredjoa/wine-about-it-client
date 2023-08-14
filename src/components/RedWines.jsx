import { Link } from "react-router-dom";

export default function RedWines() {
  return (
    <div className="w-40 h-40">
      <Link to="/filter/red">
        <img
          src="https://i.imgur.com/hfqd8Os.jpg"
          alt="Red Wines"
          className="w-full h-full object-cover"
        />
      </Link>
    </div>
  );
}
