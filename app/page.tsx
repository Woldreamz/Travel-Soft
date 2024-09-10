import Navbar from "../components/Navbar";
import { SearchForm } from "../components/SearchForm";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center bg-no-repeat flex-grow min-h-[500px] lg:min-h-screen"
        style={{ backgroundImage: `url('/airplane-bg.jpg')` }}
      >
        <div className="bg-black bg-opacity-50 min-h-full flex flex-col justify-center items-center">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold text-center">
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
      </header>

      {/* Footer (optional, but adding a footer can complete the page) */}
      <footer className="bg-white dark:bg-gray-900 text-center py-6 mt-10">
        <p className="text-gray-600 dark:text-gray-300">
          © 2024 TravelSoft. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
