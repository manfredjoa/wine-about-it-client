import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRedWines, getWhiteWines, getRoseWines, getWines } from "../api/api";
import { Button, ButtonGroup, Typography } from "@material-tailwind/react";
import WineDetail from "../components/WineDetail";
import Layout from "../layouts/Layout";

export default function FilterPage() {
  const [wine, setWine] = useState([]);
  const [subFilterToggle, setSubFilterToggle] = useState(false);
  let { productType } = useParams();

  // Re-renders page when productType button is clicked, as well as when filters are clicked in Nav Bar
  useEffect(() => {
    fetchWinesByProductType();
  }, [productType]);

  // Fetches wines based on productType from url
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
    } // else { some error message saying invalid url? }
  }

  // Re-renders page when a subFilter is clicked
  useEffect(() => {}, [subFilterToggle]);

  // Sorts wines by price, lowest to highest, with above useEffect re-rendering page
  const handleLeastToMost = () => {
    setSubFilterToggle(!subFilterToggle);
    wine.sort((a, b) => {
      return a.Price - b.Price;
    });
  };

  // Sorts wines by price, highest to lowest, with above useEffect re-rendering page
  const handleMostToLeast = () => {
    setSubFilterToggle(!subFilterToggle);
    wine.sort((b, a) => {
      return a.Price - b.Price;
    });
  };

  const handleAToZ = () => {
    setSubFilterToggle(!subFilterToggle);
    //localeCompare compares two strings and returns a number so A = -1  etc
    wine.sort((a, b) => {
      return a.WineName.localeCompare(b.WineName);
    });
  };

  return (
    <Layout>
      <div>
        <ButtonGroup className="flex justify-end mt-2.5 mr-2.5">
          <Button
            onClick={handleAToZ}
            style={{ backgroundColor: "rgb(96, 20, 30)" }}
          >
            A - Z
          </Button>

          <Button
            onClick={handleLeastToMost}
            style={{ backgroundColor: "rgb(96, 20, 30)" }}
          >
            $ - $$$
          </Button>

          <Button
            onClick={handleMostToLeast}
            style={{ backgroundColor: "rgb(96, 20, 30)" }}
          >
            $$$ - $
          </Button>
        </ButtonGroup>

        <Typography
          className="text-5xl font-black text-center mt-8"
          style={{ fontFamily: "Wine Date", color: "rgb(96, 20, 30)" }}
        >
          {productType === "red" && `Red Wines (${wine.length})`}
        </Typography>

        <Typography
          className="text-5xl font-black text-center mt-8"
          style={{ fontFamily: "Wine Date", color: "rgb(96, 20, 30)" }}
        >
          {productType === "white" && `White Wines (${wine.length})`}
        </Typography>

        <Typography
          className="text-5xl font-black text-center mt-8"
          style={{ fontFamily: "Wine Date", color: "rgb(96, 20, 30)" }}
        >
          {productType === "rose" && `Rose Wines (${wine.length})`}
        </Typography>

        <Typography
          className="text-5xl font-black text-center mt-8"
          style={{ fontFamily: "Wine Date", color: "rgb(96, 20, 30)" }}
        >
          {productType === "all" && `All Wines (${wine.length})`}
        </Typography>

        <div className="grid grid-cols-4 gap-x-8 gap-y-4 mx-40 pt-32 ">
          {wine.map((wine, index) => (
            <div className="wine-container" key={index}>
              <WineDetail wine={wine} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
