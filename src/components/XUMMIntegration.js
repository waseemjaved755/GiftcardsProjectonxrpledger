// XUMMIntegration.js
import React from 'react';
import axios from 'axios';

const XUMMIntegration = () => {
  // Replace with your XUMM API key
  const apiKey = 'YOUR_XUMM_API_KEY';

  // Function to open XUMM Wallet when the "Connect with XUMM Wallet" button is clicked
  const connectWithXUMM = async () => {
    try {
      // Make a POST request to XUMM to create a new payload for connecting the wallet
      const response = await axios.post('https://xumm.app/api/v1/platform/payload', {
        options: {
          submit: true,
          expire: 86400, // Adjust expiration time as needed
        },
      }, {
        headers: {
          'X-API-Key': apiKey,
        },
      });

      // Check if the response contains a payload ID
      if (response.data && response.data.uuid) {
        // Construct the URL to open XUMM Wallet with the payload
        const xummUrl = `https://xumm.app/sign/${response.data.uuid}`;

        // Open XUMM Wallet in a new tab
        window.open(xummUrl, '_blank');
      } else {
        console.error('Error creating XUMM payload.');
      }
    } catch (error) {
      console.error('Error connecting with XUMM Wallet:', error);
    }
  };

  return (
    <button
      className= "text-white hover:text-blue-500 transition duration-300 ease-in-out relative rounded-full border-2 border-blue-300 py-2 px-4"
      onClick={connectWithXUMM}
    >
      Connect with XUMM Wallet
    </button>
  );
};

export default XUMMIntegration;
