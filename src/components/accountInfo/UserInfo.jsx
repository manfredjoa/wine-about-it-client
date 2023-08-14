import { Card, CardBody, Typography, Button } from "@material-tailwind/react";

export default function UserInfo({ user }) {
  if (!user) {
    return <div>No user information available.</div>;
  }

  const { firstName, lastName, email, shippingAddress } = user;

  return (
    <Card className="w-full">
      <div className="bg-gray-500 text-white text-center py-6 font-bold text-3xl">
        User Info
      </div>
      <CardBody className="flex flex-col">
        <div className="mb-4">
          <Typography className="mb-2 font-medium">
            First Name: {firstName}
          </Typography>
          <hr className="w-full h-0.5 bg-gray-300" />
        </div>
        <div className="mb-4">
          <Typography className="mb-2 font-medium">
            Last Name: {lastName}
          </Typography>
          <hr className="w-full h-0.5 bg-gray-300" />
        </div>
        <div className="mb-4">
          <Typography className="mb-2 font-medium">Email: {email}</Typography>
          <hr className="w-full h-0.5 bg-gray-300" />
        </div>
        <div className="mb-4">
          <Typography className="mb-2 font-medium">
            Shipping Address: {shippingAddress}
          </Typography>
          <hr className="w-full h-0.5 bg-gray-300" />
        </div>
      </CardBody>
      <div className="flex justify-center">
        <Button
          onClick={() => console.log("Edit Info clicked")}
          className="bg-gray-300 hover:bg-gray-400 border-none rounded-none text-gray-700"
          ripple="light"
        >
          Edit Info
        </Button>
      </div>
    </Card>
  );
}
