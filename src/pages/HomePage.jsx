import HeroCarousel from "../components/HeroCarousel.jsx";
import AllWines from "../components/AllWines.jsx";
import RedWines from "../components/RedWines.jsx";
import WhiteWines from "../components/WhiteWines.jsx";
import RoseWines from "../components/RoseWines.jsx";
import RandomWinesCarousel from "../components/WineOfWeekCarousel.jsx";
import SelectionBanner from "../components/SelectionBanner.jsx";
import PromoBanner from "../components/PromoBanner.jsx";
import OurFavoritesBanner from "../components/OurFavoritesBanner.jsx";

export default function Home() {
  return (
    <div>
      <PromoBanner />
      <HeroCarousel />
      <SelectionBanner />
      <div className="flex justify-between gap-4 w-full mt-6 mb-6 px-4">
        <AllWines />
        <RedWines />
        <WhiteWines />
        <RoseWines />
      </div>
      <OurFavoritesBanner />
      <RandomWinesCarousel />
    </div>
  );
}
