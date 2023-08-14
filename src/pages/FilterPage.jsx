import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRedWines, getWhiteWines, getRoseWines, getWines } from "../api/api";
import { ButtonGroup, Button } from "@material-tailwind/react";
import WineDetail from "../components/WineDetail";
// import Layout from "../layouts/Layout";;

export default function FilterPage() {
  const [wine, setWine] = useState([]);
  const [productTypeToggle, setProductTypeToggle] = useState(false);
  const [subFilterToggle, setSubFilterToggle] = useState(false);
  const navigate = useNavigate();
  let { productType } = useParams();

  // Re-renders page when productType button is clicked, as well as when filters are clicked in Nav Bar
  useEffect(() => {
    fetchWinesByProductType();
  }, [productTypeToggle, productType]);

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

  // When productType button is clicked, it will navigate to the url, with above useEffect re-rendering page
  const handleProductTypeFilter = async (e) => {
    if (e.target.id === "red") {
      navigate("/filter/red");
      setProductTypeToggle(!productTypeToggle);
    } else if (e.target.id === "white") {
      navigate("/filter/white");
      setProductTypeToggle(!productTypeToggle);
    } else if (e.target.id === "rose") {
      navigate("/filter/rose");
      setProductTypeToggle(!productTypeToggle);
    } else if (e.target.id === "all") {
      navigate("/filter/all");
      setProductTypeToggle(!productTypeToggle);
    }
  };

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

      <div className="grid grid-cols-4 gap-x-8 gap-y-4 mx-40 pt-32 ">
        {wine.map((wine, index) => (
          <div className="wine-container" key={index}>
            <WineDetail wine={wine} />
          </div>
        ))}
      </div>
    </div>
  );
}
