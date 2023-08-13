import React from "react";

const CreateAccountLink = () => {
  return (
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
  );
};

export default CreateAccountLink;
