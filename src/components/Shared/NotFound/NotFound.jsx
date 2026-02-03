import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E9FBF8] px-4">
      <div className="text-center max-w-md w-full">
        {/* Emoji */}
        <div className="text-7xl mb-4">😕</div>

        {/* 404 */}
        <h1 className="text-5xl sm:text-6xl font-extrabold text-[#34C9B6] mb-2">
          404
        </h1>

        {/* Message */}
        <p className="text-gray-600 text-base sm:text-lg mb-6">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        {/* Button */}
        <a
          href="/"
          className="inline-block w-full sm:w-auto px-6 py-3 bg-[#34C9B6] text-white font-medium rounded-lg shadow-md hover:bg-[#2BB3A2] transition"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;




