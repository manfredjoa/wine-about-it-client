// const CenteredPage = () => {
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <CheckoutForm />
//     </div>
//   );
// };

export default function Checkout() {
  return (
    <form className="w-full max-w-md">
      <div className="mb-4">
        <label htmlFor="firstName" className="block font-semibold mb-1">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          className="w-full p-2 border rounded"
          placeholder="John"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block font-semibold mb-1">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          className="w-full p-2 border rounded"
          placeholder="Doe"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block font-semibold mb-1">
          {" "}
          Address Line 1
        </label>
        <textarea
          id="address"
          className="w-full p-2 h-10 border rounded"
          rows="4"
          placeholder="123 Main St, City, Country"
        />
      </div>
      <button
        type="submit"
        className="bg-black hover:bg-red-800 text-white py-2 px-4 rounded w-full"
      >
        Place Order
      </button>
    </form>
  );
}
