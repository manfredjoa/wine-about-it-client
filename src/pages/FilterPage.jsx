import { useEffect, useState } from "react";
import { getRedWines, getWhiteWines, getRoseWines, getWines } from "../api/api";
import { ButtonGroup, Button } from "@material-tailwind/react";
import WineDetail from "../components/WineDetail";

export default function FilterPage() {
  const [wine, setWine] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    fetchWines();
  }, []);

  useEffect(() => {}, [toggle]);

  async function fetchWines() {
    const allWines = await getWines();
    setWine(allWines);
  }

  const handleWineTypeFilter = async (e) => {
    if (e.target.id === "red") {
      const filteredWines = await getRedWines();
      setWine(filteredWines);
    } else if (e.target.id === "white") {
      const filteredWines = await getWhiteWines();
      setWine(filteredWines);
    } else if (e.target.id === "rose") {
      const filteredWines = await getRoseWines();
      setWine(filteredWines);
    } else if (e.target.id === "all") {
      const filteredWines = await getWines();
      setWine(filteredWines);
    }
  };

  const handleLeastToMost = () => {
    setToggle(!toggle);
    wine.sort((a, b) => {
      return a.Price - b.Price;
    });
  };

  const handleMostoLeast = () => {
    setToggle(!toggle);
    wine.sort((b, a) => {
      return a.Price - b.Price;
    });
  };

  return (
    <div>
      <ButtonGroup variant="outlined">
        <Button id="all" onClick={handleWineTypeFilter}>
          All Wines
        </Button>
        <Button id="red" onClick={handleWineTypeFilter}>
          Red Wines
        </Button>
        <Button id="white" onClick={handleWineTypeFilter}>
          White Wines
        </Button>
        <Button id="rose" onClick={handleWineTypeFilter}>
          Rose Wines
        </Button>
      </ButtonGroup>

      <ButtonGroup variant="outlined">
        <Button>A - Z</Button>
        <Button onClick={handleLeastToMost}>$ - $$$</Button>
        <Button onClick={handleMostoLeast}>$$$ - $</Button>
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
