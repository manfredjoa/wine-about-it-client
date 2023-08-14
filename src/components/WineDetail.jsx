import { useNavigate } from "react-router-dom";
import { Typography } from "@material-tailwind/react";

export default function WineDetail({ wine }) {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col text-center gap-y-2.5 mt-5 bg-white"
      style={{ width: "320px" }}
      onClick={() => navigate(`/search/wine-detail/${wine._id}`)}
    >
      <img
        className="object-contain mt-5"
        src={wine.img}
        alt={wine.WineName}
        style={{ height: "90vh" }}
      />
      <Typography>{wine.WineName}</Typography>
      <Typography>{wine.Price}</Typography>
    </div>
  );
}
