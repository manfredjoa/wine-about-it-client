import { Link } from "react-router-dom";

export default function WhiteWines() {
  return (
<<<<<<< HEAD
    <div className="w-30 h-100">
=======
    <div className="w-30 h-[400px]">
>>>>>>> b1df560fd96a984431832abc19a5368342d435dd
      <Link to="/filter/white">
        <img
          alt="White Wines"
          src="https://i.imgur.com/dsmCu80.jpg"
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
