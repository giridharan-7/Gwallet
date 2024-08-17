import React from 'react';

function WalletCard() {
  return (
    <div className="bg-customPurple p-4 rounded-lg text-white w-96 shadow-md">
      <h1 className="text-xl font-bold mb-2">WALLET - 01</h1>
      <h2 className="text-sm mb-4">SOLANA - SOL</h2>
      <div className="mb-4">
        <label htmlFor="publicKey" className="block text-sm mb-1">Public Key:</label>
        <input 
          id='publicKey' 
          className="w-full p-2 rounded-md text-black" 
          placeholder="password"
        />
      </div>
      <div>
        <label htmlFor="privateKey" className="block text-sm mb-1">Private Key:</label>
        <input 
          id='privateKey' 
          className="w-full p-2 rounded-md text-black" 
          placeholder="password"
        />
      </div>
    </div>
  );
}

export default WalletCard;
