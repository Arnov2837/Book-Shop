import React from "react";
import { NavLink } from "react-router";


const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-5">
      <div className="text-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 shadow-2xl max-w-md">

        <h1 className="text-8xl font-bold text-white mb-4">
          404
        </h1>

        <h2 className="text-3xl font-semibold text-white mb-3">
          Page Not Found
        </h2>

        <p className="text-gray-300 mb-8">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>


        <NavLink  to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 to-3 py-3 rounded-full font-medium transition duration-300 shadow-lg">Go Back Home</NavLink>

      </div>
    </div>
  );
};

export default ErrorPage;