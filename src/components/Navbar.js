// Navbar.js
import React from 'react';
import XUMMIntegration from './XUMMIntegration';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import {  } from 'flowbite-react';

const NavbarCom = () => {
  return (
    <nav className="bg-black py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-white text-2xl font-bold">
            <span className="text-blue-500">XRP</span>Vista
          </div>
          <ul className="flex space-x-6">
            <li className="text-white hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 transition duration-300 ease-in-out">
             <Link to="/home"> Home</Link>  
            </li>
            <li className="text-white hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 transition duration-300 ease-in-out">
            <Link to ="/services"> Services</Link>
            </li>
            <li className="text-white hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 transition duration-300 ease-in-out">
            <Link to="/contact">Contact</Link> 
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-6">
          <XUMMIntegration />
          <Cart />
        </div>
      </div>
    </nav>
  );
};

export default NavbarCom;
