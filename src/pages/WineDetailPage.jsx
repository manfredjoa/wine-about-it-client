import { useParams } from "react-router-dom";
import { getWine } from "../api/api";
import { useEffect, useState } from "react";

export default function WineDetail() {
  const [wine, setWine] = useState({});
  const [rating, setRating] = useState(0);
  
  let { id } = useParams();

  useEffect(() => {
    fetchWine();
  }, []);

  async function fetchWine() {
    const oneWine = await getWine(id);
    setWine(oneWine);
    console.log(wine);
  }

  //function to handle rating change
  const handleRatingChange = (newrating) => {
    setRating(setRating === rating ? 0 : setRating);
  };

  return (
    <div className="mx-20 mt-10">
      <div className="flex p-4 max-w-4xl mx-auto mb-10 ml-auto">
        <div className="flex-1">
          <img
            src={wine.img}
            alt={wine.WineName}
            className="w-1/2 h-auto object-cover"
          />
          </div>

        <div className="flex-1 text-center">
          <h1 className="text-2xl font-italic mb-8 font-mono">
            {wine.WineName}
          </h1>

           <div className="text-left mb-4">
   
            
            <img
    src={wine.flag}
    alt="Flag"
    className="w-1/4 md:w-1/6 h-auto"
  />
</div>

  

          <p className="mb-2 text-2xl text-left">
            <span className="font-bold">Price:</span> {wine.Price}
          </p>

      

          <p className="mb-2 text-2xl font-serif text-left">
            <span className="font-bold">Product Type:</span> {wine.ProductType}
          </p>
        

          <div className="flex items-center mt-4">
              <p className="text-lg font-semibold mr-2 ">Rating:</p>
         
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleRatingChange(star)}
                  className={`${
                    star <= rating ? "text-red-500" : "text-black"
                  } text-xl hover:text-red-500 focus:outline-none`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
          <button className="bg-black hover:bg-red-800 text-white py-5 px-10 mt-6 rounded-md">
            Add to Cart
          </button>
          <p className="mb-6 text-1xl font-serif ">
            <span className="font-bold">Description:</span> {wine.Description}
          </p>
        </div>
      </div>
      </div>
  );
}
