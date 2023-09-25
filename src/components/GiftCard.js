import React from "react";
import GiftCard1 from "../images/GiftCard1.jpg";
import GiftCard2 from "../images/GiftCard2.jpg";
import GiftCard3 from "../images/GiftCard3.jpg";
function Card() {
  return (
    <div className="container my-24 mx-auto text-center ">

      <section className="my-10"> 
          <div className="flex justify-around  items-center ">
          <div className="w-80 h-70 rounded-lg shadow-lg">
          <img src={GiftCard1} alt="Background" className="w-full h-full object-cover rounded-t-lg" />
          <div className="flex flex-col items-left justify-center p-6 bg-white rounded-b-lg">
          <h5 className="text-2xl font-medium mb-4">XRPVista Card</h5>
          <p className="text-base mb-4">Use this card to send to anyone and reedem to get 10XRP</p>
         <button type="button" className="bg-gradient-to-r text-white from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg px-5 py-2.5 inline-flex items-center justify-center mr-2 mb-2 ">
          <svg class="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
          <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
          </svg>
              Buy now
        </button>
      </div>
    </div>
    <div className="w-80 h-70 rounded-lg shadow-lg">
      <img src={GiftCard2} alt="Background" className="w-full h-full object-cover rounded-t-lg" />
      <div className="flex flex-col items-left justify-center p-6 bg-white rounded-b-lg">
        <h5 className="text-2xl font-medium mb-4">XRPVista Card</h5>
        <p className="text-base mb-4">Use this card to send to anyone and reedem to get 20XRP</p>
        <button type="button" className="bg-gradient-to-r text-white from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg px-5 py-2.5 inline-flex items-center justify-center mr-2 mb-2 ">
          <svg class="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
          <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
          </svg>
         Buy now
       </button>
      </div>
    </div>
    <div className="w-80 h-70 rounded-lg shadow-lg">
      <img src={GiftCard3} alt="Background" className="w-full h-full object-cover rounded-t-lg" />
      <div className="flex flex-col items-left justify-center p-6 bg-white rounded-b-lg">
        <h5 className="text-2xl font-medium mb-4">XRPVista Card</h5>
        <p className="text-base mb-4">Use this card to send to anyone and reedem to get 50XRP</p>
        <button type="button" className="bg-gradient-to-r text-white from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg px-5 py-2.5 inline-flex items-center justify-center mr-2 mb-2 ">
           <svg class="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
             </svg>
              Buy now
          </button>
      </div>
    </div>
  </div>
    </section>
    </div>
  );
}
export default Card;
