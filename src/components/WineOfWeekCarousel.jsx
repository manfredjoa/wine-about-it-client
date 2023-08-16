import { Carousel } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/apiConfig";

export default function RandomWinesCarousel() {
  const [randomWines, setRandomWines] = useState([]);
  const winesPerSlide = 4;
  const totalWinesToFetch = 40;

  useEffect(() => {
    const fetchRandomWines = async () => {
      try {
        const response = await api.get("/wines");
        const allWines = response.data;
        const shuffledWines = allWines.sort(() => Math.random() - 0.5);
        setRandomWines(shuffledWines.slice(0, totalWinesToFetch));
      } catch (error) {
        console.error("Error fetching random wines:", error);
      }
    };

    fetchRandomWines();
  }, []);

  const chunkedWines = [];
  for (let i = 0; i < randomWines.length; i += winesPerSlide) {
    chunkedWines.push(randomWines.slice(i, i + winesPerSlide));
  }

  return (
    <div className="min-h-100 overflow-hidden mt-6 bg-gray-100">
      <Carousel
        transition={{ duration: 3 }}
        className="rounded-xl"
        loop={true}
        autoplay={true}
        autoplayDelay={6000}
      >
        {chunkedWines.map((slideWines, slideIndex) => (
          <div className="flex justify-between" key={slideIndex}>
            {slideWines.map((wine, wineIndex) => (
              <div className="w-1/4 px-4 py-4 text-center h-100" key={wineIndex}>
                <Link to={`/search/wine-detail/${wine._id}`} className="block">
                  <div className="w-full h-80 cursor-pointer mt-4 mb-2 pb-12 pt-2 px-4 bg-white">
                    <img
                      src={wine.img}
                      alt={`Random Wine ${wineIndex + 1}`}
                      className="mx-auto max-h-full max-w-full mt-0"
                    />
                    <p className="text-l overflow-hidden whitespace-normal">
                      <span className="block h-16">{wine.WineName}</span>
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
