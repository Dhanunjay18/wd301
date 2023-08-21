import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">404 Not Found Message</h1>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
      >
        Go Back
      </Link>
    </div>   
  );
};

export default Notfound;
