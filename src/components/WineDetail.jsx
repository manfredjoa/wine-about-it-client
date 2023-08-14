import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export default function WineDetail({ wine }) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/search/wine-detail/${wine._id}`)}>
      <div className="flex flex-row">
        <img className="h-80" src={wine.img} alt={wine.WineName} />
        <div className="flex flex-col">
          <p className="text-xl">{wine.Price}</p>
          <p className="font-bold text-2xl">{wine.WineName}</p>
        </div>
        <div>
          <Button>Add to Cart</Button>
          <Button>Add to Favorites</Button>
        </div>
      </div>
    </div>
  );
}
