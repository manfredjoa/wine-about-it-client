import { Carousel } from "@material-tailwind/react";

export default function HeroCarousel() {

  const aspectRatio = 16 / 9;

  const images = [
    "https://i.imgur.com/KfnKjz8.jpg",
    "https://i.imgur.com/Gp9OB7Q.jpg",
    "https://i.imgur.com/x5aHcWZ.jpg",
    "https://i.imgur.com/vKJ5d5K.jpg",
    "https://i.imgur.com/R7Bvovn.jpg",
    "https://i.imgur.com/y06fvEP.jpg",
  ];

  //const carouselHeight = 200;

  return (
     <Carousel
      style={{ height: "70vh" }}
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
        className="w-screen object-cover object-bottom"
        style={{ height: "70vh" }}
      />
      <img
        src="https://i.imgur.com/Gp9OB7Q.jpg"
        alt="2"
        className="w-screen object-cover"
        style={{ height: "70vh" }}
      />
      <img
        src="https://i.imgur.com/x5aHcWZ.jpg"
        alt="3"
        className="w-screen object-cover object-top"
        style={{ height: "70vh" }}
      />
      <img
        src="https://i.imgur.com/vKJ5d5K.jpg"
        alt="4"
        className="w-screen object-cover"
        style={{ height: "70vh" }}
      />
      <img
        src="https://i.imgur.com/R7Bvovn.jpg"
        alt="5"
        className="w-screen object-cover"
        style={{ height: "70vh" }}
      />
      <img
        src="https://i.imgur.com/y06fvEP.jpg"
        alt="6"
        className="w-screen object-cover"
        style={{ height: "70vh" }}
      />
    </Carousel>
  );
}
