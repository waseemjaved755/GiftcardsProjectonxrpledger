import React, { createContext, useContext, useState } from 'react';

// Create the context for my wallet
const WalletContext = createContext();

//ahook for my wallet
export function useWallet() {
  return useContext(WalletContext);
}

// Create the context provider component
export function WalletProvider({ children }) {
  const [walletConnected, setWalletConnected] = useState(false);

  const connectWallet = () => {
    
    // web3 library to connect to a wallet
    // Upon successful connection, setWalletConnected(true)

    //After fetching from the API call I will set this setWalletConnected to True

  };

  const disconnectWallet = () => {
    
    // Set walletConnected to false
  };

  return (
    <WalletContext.Provider value={{ walletConnected, connectWallet, disconnectWallet }}>
      {children}
    </WalletContext.Provider>
  );
}
