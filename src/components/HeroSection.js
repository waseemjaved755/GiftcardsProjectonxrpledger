// Hero.js
import React from 'react';
import backgroundImg from '../images/hero.jpg'; // Import your background image

const Hero = () => {
  return (
    <section
      className="bg-no-repeat bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 blur-md"></div>
      <div className="container mx-auto text-center relative z-10 py-24">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to XRPVista</h1>
        <p className="text-lg text-white mb-8">Your one-stop platform for buying gift cards with XRP.</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
