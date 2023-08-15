import { Carousel, Typography, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export default function HeroCarousel() {

  return (
    <Carousel
      style={{ height: "70vh" }}
      loop={true}
      autoplay={true}
      autoplayDelay={4000}
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
          {/* <div className="w-screen" style={{ height: "70vh" }}>
            <div
              className="w-2/6 h-2/4 flex flex-col items-end justify-evenly pr-10 hover:scale-110 duration-300"
              style={{
                marginTop: "17.5vh",
                marginLeft: "50vw",
                backgroundColor: "rgba(255, 255, 255, .9)",
              }}
            >
              <Typography className="text-right" variant="lead">
                We have more than <br />
                <strong>1000 wines</strong>
                <br />
                from all over the world
              </Typography>

              <Button
                className="rounded-none w-2/5"
                variant="outlined"
                onClick={() => {
                  navigate("/filter/all");
                }}
              >
                See All Wines
              </Button>
            </div>
          </div> */}
        </div>
      )}
    >
      <img
        src="https://i.imgur.com/KfnKjz8.jpg"
        alt="Wine glasses"
        className="w-screen object-cover object-bottom"
        style={{ height: "70vh" }}
      />
      <img
        src="https://i.imgur.com/Gp9OB7Q.jpg"
        alt="Wine corks"
        className="w-screen object-cover"
        style={{ height: "70vh" }}
      />
      <img
        src="https://i.imgur.com/x5aHcWZ.jpg"
        alt="Grapes being harvested"
        className="w-screen object-cover object-top"
        style={{ height: "70vh" }}
      />
      <img
        src="https://i.imgur.com/vKJ5d5K.jpg"
        alt="Cheers"
        className="w-screen object-cover"
        style={{ height: "70vh" }}
      />
      <img
        src="https://i.imgur.com/R7Bvovn.jpg"
        alt="Wine barrels"
        className="w-screen object-cover"
        style={{ height: "70vh" }}
      />
      <img
        src="https://i.imgur.com/y06fvEP.jpg"
        alt="Vineyard"
        className="w-screen object-cover"
        style={{ height: "70vh" }}
      />
    </Carousel>
  );
}
