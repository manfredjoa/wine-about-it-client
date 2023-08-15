import { Link } from "react-router-dom";

export default function WhiteWines() {
  return (
    <div className="w-30 h-100">
      <Link to="/filter/white">
        <img
          src="https://i.imgur.com/dsmCu80.jpg"
          alt="White Wines"
          className="w-full h-full object-cover"
        />
      </Link>
      <div className=" mb-6 text-center">
        <Link to="/filter/white" className="text-black-500 hover:none">
          White Wines
        </Link>
      </div>
    </div>
  );
}
