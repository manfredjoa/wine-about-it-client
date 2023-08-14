import HeroCarousel from "../components/HeroCarousel.jsx";
import AllWines from "../components/AllWines.jsx";
import RedWines from "../components/RedWines.jsx";
import WhiteWines from "../components/WhiteWines.jsx";
import RoseWines from "../components/RoseWines.jsx";
import RandomWinesCarousel from "../components/BestSellerCarousel.jsx";

export default function Home() {
  return (
    <div>
      <HeroCarousel />

      <div className="flex justify-between items-center gap-4 w-full mt-6 mb-6">
        <AllWines />
        <RedWines />
        <WhiteWines />
        <RoseWines />
      </div>
      <RandomWinesCarousel />
    </div>
  );
}
