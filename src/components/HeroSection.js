// Hero.js
import React from 'react';
import backgroundImg from '../images/hero.jpg'; // Import your background image
//import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <section className="bg-purple-700 my-10">
    <div className="px-6 py-12 text-center md:px-12 lg:text-left">
      <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="mt-12 lg:mt-0">
            <h1 className="mt-0 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-[hsl(0,0%,100%)]">
              The best place <br /><span class="text-[hsl(61,90%,69%)]">to buy Gift Cards</span>
            </h1>
            
           < button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-7 py-2.5 text-center mr-2 mb-2"> Buy Now</button> 
            
           
            
            
          </div>
          <div className="mb-12 lg:mb-0">
            <img src={backgroundImg}
              className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Hero;
