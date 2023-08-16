import { useState } from "react";
import { registerUser } from "../api/users";
import { useNavigate } from "react-router-dom";

export default function RegistrationPage(props) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dateOfBirth: "",
  });

  const navigate = useNavigate();

  //list of requirements for password
  const [passwordRequirements, setPasswordRequirements] = useState([
    "At least 8 characters",
    "At least one uppercase letter",
    "At least one lowercase letter",
    "At least one digit",
    "At least one special character(!@#$%)",
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { setUser } = props;
    try {
      const user = await registerUser(formData);
      setUser(user);
      navigate("/");
    } catch (error) {
      console.error(error);
    }

    console.log(formData);
  };

  return (
    <div
      className="flex justify-center items-center bg-gray-100"
      style={{ color: "rgb(96, 20, 30)" }}
    >
      <div className="bg-white p-8 shadow-md w-96">
        <h2
          className="text-4xl font-black pb-5 text-center"
          style={{
            fontFamily: "Wine Date",
            color: "rgb(96, 20, 30)",
          }}
        >
          Registration
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Date of Birth (must be 21+ to purchase)
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full border px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border px-3 py-2"
              required
            />
            Password Requirements:
            <ul className="list-disc ml-4">
              {passwordRequirements.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
          </div>
          <button
            type="submit"
            className="w-full bg-black hover:bg-green-500 text-white py-2"
          >
            Create Your Account
          </button>
        </form>
      </div>
    </div>
  );
}
