import React from "react";
import { Carousel } from "@material-tailwind/react";

export default function WineCarousel() {
  return (
    <Carousel
      className="h-screen"
      loop={true}
      autoplay={true}
      autoplayDelay={2000}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="https://i.imgur.com/KfnKjz8.jpg"
        alt="1"
        className="h-4/6 w-screen object-cover"
      />
      <img
        src="https://i.imgur.com/Gp9OB7Q.jpg"
        alt="2"
        className="h-4/6 w-screen object-cover"
      />
      <img
        src="https://i.imgur.com/x5aHcWZ.jpg"
        alt="3"
        className="h-4/6 w-screen object-cover"
      />
      <img
        src="https://i.imgur.com/vKJ5d5K.jpg"
        alt="4"
        className="h-4/6 w-screen object-cover"
      />
      <img
        src="https://i.imgur.com/R7Bvovn.jpg"
        alt="5"
        className="h-4/6 w-screen object-cover"
      />
      <img
        src="https://i.imgur.com/y06fvEP.jpg"
        alt="6"
        className="h-4/6 w-screen object-cover"
      />
    </Carousel>
  );
}
