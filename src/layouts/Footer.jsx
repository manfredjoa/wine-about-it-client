import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/development");
  };

  return (
    <div className="flex flex-col">
      <footer className="bg-gray-900 text-white py-10 sticky-bottom-0 w-screen">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div>
            <p className="text-sm mb-2">
              &copy; {new Date().getFullYear()} Wine About It. All rights
              reserved.
            </p>
            <div className="flex justify-center">
              <ul className="flex space-x-4 mt-2">
                <li>
                  <a href="/development" className="hover:text-gray-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="/development" className="hover:text-gray-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 md:mt-0 md:ml-6">
            <h3 className="text-lg font-semibold mb-2">
              Sign Up for Our Newsletter
            </h3>
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={handleEmailChange}
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
              <button
                type="submit"
                className="px-4 py-2 text-white rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                style={{ backgroundColor: "rgb(96, 20, 30)" }}
              >
                Submit
              </button>
            </form>
          </div>
          <div className="mt-6 md:mt-0 md:ml-6">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="development" className="hover:text-gray-400">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="/development" className="hover:text-gray-400">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li>
                <a href="development" className="hover:text-gray-400">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
