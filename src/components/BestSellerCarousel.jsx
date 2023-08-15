import { Carousel } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/apiConfig";

export default function RandomWinesCarousel() {
  const [randomWines, setRandomWines] = useState([]);
  const winesPerSlide = 4;

  useEffect(() => {
    const fetchRandomWines = async () => {
      try {
        const response = await api.get("/wines");
        const allWines = response.data;
        const shuffledWines = shuffleArray(allWines);
        setRandomWines(shuffledWines);
      } catch (error) {
        console.error("Error fetching random wines:", error);
      }
    };

    fetchRandomWines();
  }, []);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const chunkedWines = [];
  for (let i = 0; i < randomWines.length; i += winesPerSlide) {
    chunkedWines.push(randomWines.slice(i, i + winesPerSlide));
  }

  return (
    <div className="min-h-100 overflow-hidden mt-6 bg-gray-100">
      <Carousel
        loop={true}
        autoplay={false}
        swipe={false}
        perPage={1}
        className="max-h-full"
        
      >
        {chunkedWines.map((slideWines, slideIndex) => (
          <div className="flex justify-between" key={slideIndex}>
            {slideWines.map((wine, wineIndex) => (
              <div
                className="w-1/4 px-2 pb-4 text-center h-100"
                key={wineIndex}
              >
                <Link to={`/search/wine-detail/${wine._id}`} className="block">
                  <div
                    className="w-full h-80 cursor-pointer mb-2 p-8 bg-white"
                  >
                    <img
                      src={wine.img}
                      alt={`Random Wine ${wineIndex + 1}`}
                      className="mx-auto max-h-full max-w-full mt-0"
                    />
                      <p className="text-l">{wine.WineName}</p>
                    <div className="mt-2 mb-4 text-black overflow-hidden">
                    </div>
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
