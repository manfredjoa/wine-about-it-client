import React from "react";
import WineCarousel from "../components/WineCarousel.jsx";
import AllWines from "../components/AllWines.jsx";
import RedWines from "../components/RedWines.jsx";
import WhiteWines from "../components/WhiteWines.jsx";
import RoseWines from "../components/RoseWines.jsx";

export default function Home() {
  return (
    <div>
      <WineCarousel />

      <div className="flex justify-center items-center gap-4 w-full mt-6 mb-6">
        <AllWines />
        <RedWines />
        <WhiteWines />
        <RoseWines />
      </div>
    </div>
  );
}
