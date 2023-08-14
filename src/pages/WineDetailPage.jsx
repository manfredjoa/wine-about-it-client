import { useParams } from "react-router-dom";
import { getWine } from "../api/api";
import { useEffect, useState } from "react";
// import Layout from "../layouts/Layout";;

export default function WineDetail() {
  const [wine, setWine] = useState({});

  let { id } = useParams();

  useEffect(() => {
    fetchWine();
  }, []);

  async function fetchWine() {
    const oneWine = await getWine(id);
    setWine(oneWine);
    console.log(wine);
  }

  return (
    // <Layout>
    <div className="mx-20 mt-10">
      <div className="flex p-4 max-w-4xl mx-auto mb-10">
        <div className="flex-1 pr-4">
          <img
            src={wine.img}
            alt={wine.WineName}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="flex-1 text-center">
          <h1 className="text-5xl font-bold mb-10 font-mono">
            {wine.WineName}
          </h1>
          <p className="mb-2 text-3xl">
            <span className="font-bold">Price:</span> {wine.Price}
          </p>

          <img src={wine.flag} />

          <p className="mb-2 text-3xl">
            <span className="font-bold">ProductType:</span> {wine.ProductType}
          </p>
          <p className="mb-2 text-3xl">
            <span className="font-bold">Description:</span> {wine.Description}
          </p>
        </div>
      </div>
    </div>
    // </Layout>
  );
}
