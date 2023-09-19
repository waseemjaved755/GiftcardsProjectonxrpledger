// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-4 text-white">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} XRPVista. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
