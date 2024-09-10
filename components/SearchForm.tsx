// components/SearchForm.tsx
import React from "react";

export const SearchForm = () => {
  return (
    <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-white dark:bg-gray-800 shadow-lg p-5 rounded-md">
      <div>
        <label className="block text-gray-600 dark:text-gray-200 mb-2">
          Destination
        </label>
        <input
          type="text"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
          placeholder="Enter city"
        />
      </div>

      <div>
        <label className="block text-gray-600 dark:text-gray-200 mb-2">
          Check in
        </label>
        <input
          type="date"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
        />
      </div>

      <div>
        <label className="block text-gray-600 dark:text-gray-200 mb-2">
          Check out
        </label>
        <input
          type="date"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
        />
      </div>

      <div className="sm:col-span-2 lg:col-span-1">
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Book trip
        </button>
      </div>
    </form>
  );
};
