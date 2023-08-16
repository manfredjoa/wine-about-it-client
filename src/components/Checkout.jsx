import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button } from "@material-tailwind/react";
import { createOrder } from "../api/orders";

// I personally think checkout may look better as a modal pop up, rather than having a whole page for it
export default function Checkout({ cartQuantity, cartTotal, itemsInfo, user }) {
  const items = itemsInfo.map((item) => ({
    _id: item._id,
    qty: item.quantity,
  }));
  console.log(user.id);

  const [submitForm, setSubmitForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    shippingAddress: {
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      postalCode: "",
    },
    cartQuantity,
    cartTotal: cartTotal,
    items: items,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createOrder(formData);
    console.log(formData);
    handleRemoveState();
    setSubmitForm("submitted");
  };
  const handleRemoveState = () => {
    localStorage.removeItem("persist:root");
  };

  return (
    <>
      {!submitForm ? (
        <div className="flex justify-center mx-auto">
          <form
            className="flex flex-col justify-center items-center w-80 gap-2"
            style={{ color: "rgb(96, 20, 30)" }}
            onSubmit={handleSubmit}
          >
            <Typography>
              <label>First Name:</label>
              <br />
              <input
                className="w-80 bg-gray-100 px-2 outline-none"
                style={{ border: "1px solid rgb(96, 20, 30)" }}
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Typography>

            <Typography>
              <label>Last Name:</label>
              <br />
              <input
                className="w-80 bg-gray-100 px-2 outline-none"
                style={{ border: "1px solid rgb(96, 20, 30)" }}
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Typography>

            <Typography>
              <label>Street Address:</label>
              <br />
              <input
                className="w-80 bg-gray-100 px-2 outline-none"
                style={{ border: "1px solid rgb(96, 20, 30)" }}
                type="text"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
              />
            </Typography>

            <Typography>
              <label>Address Line 2:</label>
              <br />
              <input
                className="w-80 bg-gray-100 px-2 outline-none"
                style={{ border: "1px solid rgb(96, 20, 30)" }}
                type="text"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleChange}
              />
            </Typography>

            <div className="w-80 flex flex-row justify-between">
              <Typography>
                <label>City:</label>
                <br />
                <input
                  className="w-36 bg-gray-100 px-2 outline-none"
                  style={{ border: "1px solid rgb(96, 20, 30)" }}
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </Typography>

              <Typography>
                <label>State:</label>
                <br />
                <input
                  className="w-36 bg-gray-100 px-2 outline-none"
                  style={{ border: "1px solid rgb(96, 20, 30)" }}
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                />
              </Typography>
            </div>

            <Typography>
              <label>Postal Code:</label>
              <br />
              <input
                className="w-80 bg-gray-100 px-2 outline-none"
                style={{ border: "1px solid rgb(96, 20, 30)" }}
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
              />
            </Typography>

            <Typography>
              <label>Credit Card Number:</label>
              <br />
              <input
                className="w-80 bg-gray-100 px-2 outline-none"
                style={{ border: "1px solid rgb(96, 20, 30)" }}
                type="text"
                name="creditCardNumber"
                value={formData.creditCardNumber}
                onChange={handleChange}
              />
            </Typography>

            <div className="w-80 flex flex-row justify-between">
              <Typography>
                <label>Expiration:</label>
                <br />
                <input
                  className="w-36 bg-gray-100 px-2 outline-none"
                  style={{ border: "1px solid rgb(96, 20, 30)" }}
                  type="text"
                  name="expiration"
                  value={formData.expiration}
                  onChange={handleChange}
                />
              </Typography>

              <Typography>
                <label>CVC:</label>
                <br />
                <input
                  className="w-36 bg-gray-100 px-2 outline-none"
                  style={{ border: "1px solid rgb(96, 20, 30)" }}
                  type="text"
                  name="cVC"
                  value={formData.cVC}
                  onChange={handleChange}
                />
              </Typography>
            </div>

            <button
              className="w-20 mt-5"
              style={{ border: "1px solid rgb(96, 20, 30)" }}
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div className="flex flex-col">
          <Typography className="flex justify-center">
            Thank you for your order!
          </Typography>
          <Button
            type="submit"
            onClick={() => {
              navigate("/");
            }}
            className="w-40 flex justify-center mx-auto"
          >
            Home
          </Button>
        </div>
      )}
    </>
  );
}
