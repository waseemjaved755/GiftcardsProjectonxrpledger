import React from "react";
 
function Card()
{ 

    return(
        <div className="relative bg-white rounded-lg h-72 overflow-hidden shadow-lg">
        <img
          src="/app/src/images/GiftCard.jpg" // Replace with your image path
          alt="Gift Card"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-white text-center">
            <h5 className="mb-2 text-xl font-medium leading-tight">
              Gift Card Title
            </h5>
            <p className="mb-4 text-base">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="rounded-full bg-primary text-white px-6 py-2 text-xs font-medium uppercase hover:bg-primary-600 focus:outline-none focus:ring focus:ring-primary-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    );
   
  
} ;


export default Card;