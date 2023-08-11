import WineDetail from "../components/WineDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRedWines, getWhiteWines, getRoseWines, getWines } from "../api/api";
import { all } from "axios";

export default function FilterPage() {
  const [wine, setWine] = useState([]);
  let { productType } = useParams();
  // const [allWines, setAllWines] = useState(false);

  useEffect(() => {
    fetchWinesByProductType();
  }, []);

  async function fetchWinesByProductType() {
    if (productType === "red") {
      const allWines = await getRedWines();
      setWine(allWines);
    } else if (productType === "white") {
      const allWines = await getWhiteWines();
      setWine(allWines);
    } else if (productType === "rose") {
      const allWines = await getRoseWines();
      setWine(allWines);
    } else if (productType === "all") {
      const allWines = await getWines();
      setWine(allWines);
    }
  }

  return (
    <div className="grid grid-cols-4 gap-x-8 gap-y-4 mx-40 pt-32 ">
      {wine.map((wine, index) => (
        <div className="wine-container" key={index}>
          <WineDetail wine={wine} />
        </div>
      ))}
    </div>
  );
}
