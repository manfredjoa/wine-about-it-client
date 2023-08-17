import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRedWines, getWhiteWines, getRoseWines, getWines } from "../api/api";
import { Button, ButtonGroup, Typography } from "@material-tailwind/react";
import WineDetail from "../components/WineDetail";

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
    <div className="bg-gray-100 pb-10">
      <Typography
        className="text-4xl font-black pl-14 pt-10"
        style={{
          fontFamily: "'HelpUsGiambattista', sans-serif",
          color: "rgb(96, 20, 30)",
        }}
      >
        {(productType === "red" && `Red Wines (${wine.length})`) ||
          (productType === "white" && `White Wines (${wine.length})`) ||
          (productType === "rose" && `Rose Wines (${wine.length})`) ||
          (productType === "all" && `All Wines (${wine.length})`)}
      </Typography>

      <div className="flex justify-evenly">
        <div className="w-80"></div>
        <div className="w-80"></div>
        <div className="w-80"></div>
        <ButtonGroup className="flex justify-end w-80">
          <Button
            className="rounded-none"
            onClick={handleAToZ}
            style={{
              backgroundColor: "rgb(96, 20, 30)",
              fontFamily: "'HelpUsGiambattista', sans-serif",
            }}
          >
            A - Z
          </Button>

          <Button
            className="rounded-none"
            onClick={handleLeastToMost}
            style={{
              backgroundColor: "rgb(96, 20, 30)",
              fontFamily: "'HelpUsGiambattista', sans-serif",
            }}
          >
            $ - $$$
          </Button>

          <Button
            className="rounded-none"
            onClick={handleMostToLeast}
            style={{
              backgroundColor: "rgb(96, 20, 30)",
              fontFamily: "'HelpUsGiambattista', sans-serif",
            }}
          >
            $$$ - $
          </Button>
        </ButtonGroup>
      </div>

      <div className="wine-container flex flex-wrap justify-evenly gap-y-8">
        {wine.map((wine, index) => (
          <WineDetail wine={wine} key={index} />
        ))}
      </div>
    </div>
  );
}
