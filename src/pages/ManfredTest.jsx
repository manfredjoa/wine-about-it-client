import { useState, useEffect } from "react";
import { getSouthAfricaWines } from "../api/api.js";

export default function ManfredTest() {
  const [wines, setWines] = useState([]);

  useEffect(() => {
    fetchWines();
  }, []);

  const fetchWines = async () => {
    const allWines = await getSouthAfricaWines();
    setWines(allWines);
  };

  return (
    <div>
      {wines.map((wine) => (
        <h1 key={wine._id}>{wine.WineName}</h1>
      ))}
    </div>
  );
}
