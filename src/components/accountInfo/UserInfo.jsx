import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export default function UserInfo({ user }) {
  const navigate = useNavigate();

  if (!user) {
    return <div>No user information available.</div>;
  }

  const { firstName, lastName, email, shippingAddress } = user;

  return (
    <Card className="w-full bg-gray-100" style={{ height: "55vh" }}>
      <div className="bg-black text-white text-center py-6 font-bold text-3xl">
        User Info
      </div>
      <CardBody
        className="flex flex-col"
        style={{ fontFamily: "'HelpUsGiambattista', sans-serif" }}
      >
        <div className="mb-4">
          <Typography
            className="mb-2 font-medium"
            style={{
              fontFamily: "'HelpUsGiambattista', sans-serif",
              color: "rgb(96, 20, 30)",
            }}
          >
            First Name: {firstName}
          </Typography>
          <hr className="w-full h-0.5 bg-gray-300" />
        </div>
        <div className="mb-4">
          <Typography
            className="mb-2 font-medium"
            style={{
              fontFamily: "'HelpUsGiambattista', sans-serif",
              color: "rgb(96, 20, 30)",
            }}
          >
            Last Name: {lastName}
          </Typography>
          <hr className="w-full h-0.5 bg-gray-300" />
        </div>
        <div className="mb-4">
          <Typography
            className="mb-2 font-medium"
            style={{
              fontFamily: "'HelpUsGiambattista', sans-serif",
              color: "rgb(96, 20, 30)",
            }}
          >
            Email: {email}
          </Typography>
          <hr className="w-full h-0.5 bg-gray-300" />
        </div>
        <div className="mb-4">
          <Typography
            className="mb-2 font-medium"
            style={{
              fontFamily: "'HelpUsGiambattista', sans-serif",
              color: "rgb(96, 20, 30)",
            }}
          >
            Shipping Address: {shippingAddress}
          </Typography>
          <hr className="w-full h-0.5 bg-gray-300" />
        </div>
      </CardBody>
      <div className="flex justify-center">
        <Button
          onClick={() => navigate("/development")}
          variant="outlined"
          className="bg-black hover:bg-green-500 border-none rounded-none text-white"
          style={{ fontFamily: "'HelpUsGiambattista', sans-serif" }}
          ripple="light"
        >
          Edit Info
        </Button>
      </div>
    </Card>
  );
}
