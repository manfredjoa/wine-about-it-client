import { ButtonGroup, Button } from "@material-tailwind/react";
import { useState } from "react";

export default function FilterBarWineTypes() {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (e) => {
    console.log(e.target.id);
    // if (e.target.id === "all") {

    // }
  };

  return (
    <div>
      <ButtonGroup variant="outlined">
        <Button id="all" onClick={handleClick}>
          All Wines
        </Button>
        <Button id="red" onClick={handleClick}>
          Red Wines
        </Button>
        <Button id="white" onClick={handleClick}>
          White Wines
        </Button>
        <Button id="rose" onClick={handleClick}>
          Rose Wines
        </Button>
      </ButtonGroup>
    </div>
  );
}
