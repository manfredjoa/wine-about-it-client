import { useNavigate } from "react-router-dom";
import { Typography, Button } from "@material-tailwind/react";

export default function WineDetailFavorite({ wine }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col text-center gap-y-2.5 mt-5 bg-white w-80">
      <div className="flex justify-end">
        <Button
          variant="outlined"
          className="h-8 w-8 p-1 rounded-none absolute z-50"
          style={{ color: "rgb(96, 20, 30)", border: "none" }}
          onClick={() => console.log("hi")}
        >
          x
        </Button>
      </div>
      <img
        onClick={() => navigate(`/search/wine-detail/${wine._id}`)}
        className="object-contain mt-5"
        src={wine.img}
        alt={wine.WineName}
        style={{ height: "50vh" }}
      />
      <Typography>{wine.WineName}</Typography>
      <Typography>{wine.Price}</Typography>
    </div>
  );
}
