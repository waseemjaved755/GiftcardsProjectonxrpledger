import React from 'react';
import axios from 'axios';
import { useWallet } from './WalletContext';

const XUMMIntegration = () => {
  const apiKey = 'YOUR_XUMM_API_KEY';
  const { walletConnected, connectWallet, disconnectWallet } = useWallet();

  const connectWithXUMM = async () => {
    try {
      const response = await axios.post(
        'https://xumm.app/api/v1/platform/payload',
        {
          options: {
            submit: true,
            expire: 86400, // Adjust expiration time as needed
          },
        },
        {
          headers: {
            'X-API-Key': apiKey,
          },
        }
      );

      if (response.data && response.data.uuid) {
        const xummUrl = `https://xumm.app/sign/${response.data.uuid}`;
        window.open(xummUrl, '_blank');
      } else {
        console.error('Error creating XUMM payload.');
      }
    } catch (error) {
      console.error('Error connecting with XUMM Wallet:', error);
    }
  };

  return (
    <div>
      {walletConnected ? (
        <button
          className="text-white hover:text-blue-500 transition duration-300 ease-in-out relative rounded-full border-2 border-blue-300 py-2 px-4"
          onClick={disconnectWallet}
        >
          Disconnect Wallet
        </button>
      ) : (
        <button
          className="text-white hover:text-blue-500 transition duration-300 ease-in-out relative rounded-full border-2 border-blue-300 py-2 px-4"
          onClick={connectWithXUMM}
        >
          Connect with XUMM Wallet
        </button>
      )}
    </div>
  );
};

export default XUMMIntegration;
