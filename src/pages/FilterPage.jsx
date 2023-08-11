import WineDetail from "../components/WineDetail";
import { useParams } from "react-router-dom";

export default function FilterPage() {
  let { productType } = useParams();
  console.log("Type:", productType);

  return (
    <div className="grid grid-cols-4 gap-x-8 gap-y-4 mx-40 pt-32 ">
      {mockData.map((wine, index) => (
        <div className="wine-container" key={index}>
          <WineDetail wine={wine} />
        </div>
      ))}
    </div>
  );
}
