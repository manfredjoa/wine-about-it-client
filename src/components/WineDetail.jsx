import { Button } from "@material-tailwind/react";
import React from "react";

// const mockData = {
//   _id: "64d404d5962ba4705fca0ecf",
//   WineName: "Dominus 2014",
//   Price: 229.97,
//   CountryState: "California",
//   Region: "Napa Valley",
//   ProductType: "Red Wine",
//   VarietalType: "Cabernet Sauvignon",
//   Description:
//     "Wine Advocate-Napa CA - The 2014 is a sexy opulent layered multidimensional wine with notes of red and blackcurrant cedar wood tobacco leaf spice box and licorice. The color is a dense plum/ruby/purple much like the Napanook. This is a beauty that is already drinking gorgeously... ()",
//   img: "https://images.vivino.com/thumbs/FvLdztxrRXOZxU1jfVoQKQ_pb_x960.png",
//   flag: "https://flagsapi.com/US/flat/64.png",
//   __v: 0,
// };

function WineDetail({ wine }) {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <img className="h-80" src={wine.img} alt={wine.WineName} />
          <div className="flex flex-col">
            <p className="text-xl">{wine.Price}</p>
            <p className="font-bold text-2xl">{wine.WineName}</p>
          </div>
          <div>
            <Button>See More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WineDetail;
