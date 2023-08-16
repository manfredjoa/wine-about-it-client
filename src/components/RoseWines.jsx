import { Link } from "react-router-dom";

export default function RoseWines() {
  return (
    <div className="w-30 h-[450px]">
      <Link to="/filter/rose">
        <img
          src="https://i.imgur.com/ByfizrF.jpg"
          alt="Rose Wines"
          className="w-full h-full object-cover"
        />
      </Link>
      <div className=" mb-6 text-center">
        <Link to="/filter/rose" className="text-black-500 hover:none">
          Rose Wines
        </Link>
      </div>
    </div>
  );
}