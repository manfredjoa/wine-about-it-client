import { Typography } from "@material-tailwind/react";

export default function PromoBanner() {
  return (
    <div className="flex bg-black text-white">
      <Typography className="lead w-1/3 text-center border-r">
        Free shipping over $50
      </Typography>
      <Typography className="lead w-1/3 text-center border-r">
        Over 200 Wines in our Collection
      </Typography>
      <Typography className="lead w-1/3 text-center">
        24/7 Customer Support
      </Typography>
    </div>
  );
}
