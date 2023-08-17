import { Typography } from "@material-tailwind/react";

export default function PromoBanner() {
  return (
    <div className="flex bg-black text-white h-[42px]">
      <Typography
        className="flex items-center justify-center text-lg w-1/3 border-r"
        style={{ fontFamily: "'HelpUsGiambattista', sans-serif" }}
      >
        Free shipping over $50
      </Typography>

      <Typography
        className="flex items-center justify-center text-lg w-1/3 border-r"
        style={{ fontFamily: "'HelpUsGiambattista', sans-serif" }}
      >
        Over 200 Wines in our Collection
      </Typography>

      <Typography
        className="flex items-center justify-center text-lg w-1/3"
        style={{ fontFamily: "'HelpUsGiambattista', sans-serif" }}
      >
        24/7 Customer Support
      </Typography>
    </div>
  );
}
