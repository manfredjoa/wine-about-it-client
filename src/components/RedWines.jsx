import { Link } from "react-router-dom";

export default function RedWines() {
  return (
    <div className="w-30 h-[400px]">
      <Link to="/filter/red">
        <img
          alt="Red Wines"
          src="https://i.imgur.com/hfqd8Os.jpg"
          className="w-full h-full object-cover"
        />
      </Link>
      <div className=" mb-6 text-center">
        <Link to="/filter/red" className="text-black-500 hover:none">
          Red Wines
        </Link>
      </div>
    </div>
  );
}
