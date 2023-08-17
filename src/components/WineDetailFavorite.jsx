import { useNavigate } from "react-router-dom";
import { Typography, Button } from "@material-tailwind/react";
import { removeFavorites } from "../redux/features/user/favoritesSlice";
import { useDispatch } from "react-redux";
import { deleteFavorites } from "../api/users";

export default function WineDetailFavorite({ wine, user }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const wineId = wine._id;
  const handleRemoveFromFavorites = async () => {
    try {
      await deleteFavorites(user.id, wineId); // Removes favorite from database
      dispatch(removeFavorites(wineId)); // Takes wineId to remove it from the array
      window.location.reload();
    } catch (error) {}
  };

  return (
    <div className="flex flex-col text-center gap-y-2.5 mt-5 bg-white w-80">
      <div className="flex justify-end">
        <Button
          variant="outlined"
          className="h-8 w-8 p-1 rounded-none absolute z-50 outline-none"
          style={{ color: "rgb(96, 20, 30)", border: "none" }}
          onClick={handleRemoveFromFavorites}
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
      <Typography className="font-black">{wine.WineName}</Typography>
      <Typography className="font-black text-green-500">
        ${wine.Price}
      </Typography>
    </div>
  );
}
