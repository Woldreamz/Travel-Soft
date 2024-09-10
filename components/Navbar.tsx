// components/Navbar.tsx

import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md py-4 px-5 md:px-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold text-gray-800 dark:text-white">
          TravelSoft
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-gray-800 dark:text-gray-300 hover:text-blue-500"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-800 dark:text-gray-300 hover:text-blue-500"
          >
            About
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden">
          <button className="text-gray-800 dark:text-white">Menu</button>
        </div>

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
