import React, { useState } from 'react';
import WalletCard from './WalletCard';

function WalletPage() {
  const [wallets, setWallets] = useState([{}]); // Start with one wallet by default

  const addWallet = () => {
    setWallets([...wallets, {}]); // Add a new wallet to the stack
  };

  return (
    <div className='bg-purple min-h-screen w-full text-customPurple pt-3 dotted-background'>
      <div className='flex flex-col justify-center items-center'>
        <button 
          onClick={addWallet} 
          className="bg-customPurple text-white font-medium py-2 px-6 rounded-md hover:bg-hoverPurple mb-4">
          Create a new wallet
        </button>

        <div className='flex flex-col gap-4'>
          {wallets.map((_, index) => (
            <WalletCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WalletPage;
