import { Link } from "react-router-dom";

export default function LinkToRegistration() {
  return (
    <Link to="/registration">
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-8 shadow-md rounded-lg w-96">
          <p className="text-center text-gray-600">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              <h3>Sign up </h3>
            </a>
          </p>
        </div>
      </div>
    </Link>
  );
}
