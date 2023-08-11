export default function WineDetail() {
  const mockData = {
    WineName: "Echion Cabernet Sauvignon 2014",
    Price: 179.99,
    CountryState: "California",
    Region: "Napa Valley",
    ProductType: "Red Wine",
    VarietalType: "Cabernet Sauvignon",
    Description:
      "James Suckling-Napa Valley CA - Extremely floral and fresh with very firm and silky tannins. Hints of spices and dried fruits. Full-bodied tight and refined... A blend of two top Oakville vineyards. Beautiful thing. (Intense Spice Dried Fruit  Full-bodied )",
    img: "https://images.vivino.com/thumbs/0667TG7qS2KsRLsShMTjAw_pb_x960.png",
    flag: "https://flagsapi.com/US/flat/64.png",
  };

  return (
    <div className="mx-20 mt-10">
      <div className="flex p-4 max-w-4xl mx-auto mb-10">
        <div className="flex-1 pr-4">
          {mockData.img && (
            <img
              src={mockData.img}
              alt={mockData.WineName}
              className="w-full h-auto object-cover"
            />
          )}
        </div>

        <div className="flex-1 text-center">
          <h1 className="text-5xl font-bold mb-10 font-mono">
            {mockData.WineName}
          </h1>
          <p className="mb-2 text-3xl">
            <span className="font-bold">Price:</span> {mockData.Price}
          </p>
          <p className="mb-2 text-3xl">
            <span className="font-bold">Flag:</span> {mockData.flag}
          </p>
          <p className="mb-2 text-3xl">
            <span className="font-bold">ProductType:</span>{" "}
            {mockData.ProductType}
          </p>
          <p className="mb-2 text-3xl">
            <span className="font-bold">Description:</span>{" "}
            {mockData.Description}
          </p>
        </div>
      </div>
    </div>
  );
}
