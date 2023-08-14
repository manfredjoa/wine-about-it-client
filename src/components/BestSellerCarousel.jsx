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

  const divStyle = {
    backgroundColor: "rgb(96, 20, 30)",
  };

  return (
    <div className="max-h-80 overflow-hidden mt-6">
      <Carousel
        loop={true}
        autoplay={true}
        autoplayDelay={3000}
        swipe={false}
        perPage={1} // Set to display one wine at a time
        className="h-90"
      >
        {chunkedWines.map((slideWines, slideIndex) => (
          <div className="flex justify-between" key={slideIndex}>
            {slideWines.map((wine, wineIndex) => (
              <div
                className="w-1/4 px-2 text-center max-h-80"
                key={wineIndex}
              >
                <Link to={`/search/wine-detail/${wine._id}`} className="block">
                  <div
                    className="w-full h-80 cursor-pointer mb-2 p-4 rounded-lg"
                    style={divStyle}
                  >
                    <img
                      src={wine.img}
                      alt={`Random Wine ${wineIndex + 1}`}
                      className="mx-auto max-h-full max-w-full mt-0"
                    />
                    <div className="mt-2 text-white">{wine.WineName}</div>
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
