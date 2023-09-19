import React from 'react';
const LandingPage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-white text-2xl font-bold">XRPVista</div>
            <ul className="flex space-x-4">
              <li className="text-white">Home</li>
              <li className="text-white">About</li>
              <li className="text-white">Services</li>
              <li className="text-white">Contact</li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to XRPVista</h1>
            <p className="text-lg text-gray-600">Your one-stop platform for buying gift cards with XRP.</p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full mt-6 hover:bg-blue-600 transition duration-300 ease-in-out">Get Started</button>
          </div>
        </div>
      </section>

      {/* More sections and content can go here */}
    </div>
  );
};

export default LandingPage;
