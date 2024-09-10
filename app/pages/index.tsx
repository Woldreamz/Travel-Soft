// pages/index.tsx

import { SearchForm } from "../../components/SearchForm";
import React from "react";

const Home = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url('/airplane-bg.jpg')` }}
    >
      <div className="bg-black bg-opacity-50 min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-white text-4xl sm:text-6xl lg:text-7xl font-bold text-center">
          Plan. TravelSoft. Enjoy and Explore.
        </h1>
        <p className="text-gray-200 text-sm sm:text-lg lg:text-xl text-center mt-4">
          Plan and book your perfect trip! Discover the world with confidence.
          Your Next Adventure Awaits.
        </p>

        {/* Search Form */}
        <div className="w-full mt-8 px-4 sm:px-8 lg:px-0 max-w-4xl">
          <SearchForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
