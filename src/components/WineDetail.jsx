import { useNavigate } from "react-router-dom";
import { Typography } from "@material-tailwind/react";

export default function WineDetail({ wine }) {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col text-center gap-y-2.5 mt-5 bg-white w-80"
      onClick={() => navigate(`/search/wine-detail/${wine._id}`)}
    >
      <img
        className="object-contain mt-5"
        src={wine.img}
        alt={wine.WineName}
        style={{ height: "50vh" }}
      />
      <Typography className="font-black">{wine.WineName}</Typography>
      <Typography className="font-black text-green-500">
        ${wine.Price}
      </Typography>
    </div>
  );
}
