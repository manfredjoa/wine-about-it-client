export default function WineDetailShopping({ itemInfo }) {
  return (
    <div className="flex flex-col">
      <div
        className="w-screen flex items-center space-x-4 p-5 bg-gray-100"
        style={{
          borderTop: "1px solid rgb(96, 20, 30)",
          borderBottom: "1px solid rgb(96, 20, 30)",
          marginTop: "-1px",
        }}
      >
        <img
          className="w-32 h-32 object-contain"
          src={itemInfo.img}
          alt={itemInfo.WineName}
        />
        <div className="flex flex-col justify-between">
          <h3
            className="text-2xl font-semibold"
            style={{ color: "rgb(96, 20, 30)" }}
          >
            {itemInfo.WineName}
          </h3>
          <p style={{ color: "rgb(96, 20, 30)" }}>${itemInfo.Price} each</p>
          <p style={{ color: "rgb(96, 20, 30)" }}>
            Quantity: {itemInfo.quantity}
          </p>
          <p className="text-green-500 font-semibold">
            Item Total: ${Math.floor(itemInfo.Price * itemInfo.quantity)}
          </p>
        </div>
      </div>
    </div>
  );
}
