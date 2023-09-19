// Navbar.js
import React from 'react';
import XUMMIntegration from './XUMMIntegration';
import { Link } from 'react-router-dom';
import Cart from './Cart';

const Navbar = () => {
  return (
    <nav className="bg-black py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-white text-2xl font-bold">
            <span className="text-blue-500">XRP</span>Vista
          </div>
          <ul className="flex space-x-6">
            <li className="text-white hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 transition duration-300 ease-in-out">
              Home
            </li>
            <li className="text-white hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 transition duration-300 ease-in-out">
            Services
            </li>
            <li className="text-white hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 transition duration-300 ease-in-out">
              Contact
            </li>
          </ul>
        </div>
        <div className="flex-grow text-center">
          {/* Search bar */}
          <input
            type="text"
            placeholder="Search..."
            className="w-72 px-2 py-1 border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex items-center space-x-6">
          <XUMMIntegration />
          <Cart />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;