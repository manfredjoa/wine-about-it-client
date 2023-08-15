export default function WineDetailShopping({ itemInfo }) {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-md">
        <img
          className="w-32 h-32 object-cover rounded-full"
          src={itemInfo.img}
          alt={itemInfo.WineName}
        />
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold">{itemInfo.WineName}</h3>
          <p className="text-lg text-green-500 font-semibold">
            {itemInfo.Price} USD
          </p>
          <p className="text-gray-600">Quantity: {itemInfo.quantity}</p>
        </div>
      </div>
    </div>
  );
}
