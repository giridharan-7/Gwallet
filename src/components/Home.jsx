import React, { useState } from 'react';

function Home() {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleVerify = () => {
    console.log('Verifying password:', password);
  };

  const handleCreateNew = () => {
    console.log('Creating new wallet...');
  };

  return (
    <div className="bg-purple min-h-screen w-full text-customPurple flex flex-col justify-center items-center dotted-background">
      

      <div className="p-8">

        <div className="text-center">
          <h1 className="text-4xl font-bold">WELCOME TO GWALLET</h1>
        </div>

        <div className='p-8'>
          <label htmlFor="password" className="text-xl font-medium px-4">
            Enter Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
            className="w-64 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className=' flex flex-col justify-center items-center'>
          <button
            onClick={handleVerify}
            className="bg-customPurple text-white font-medium py-2 px-6 rounded-md hover:bg-hoverPurple"
          >
            Verify
          </button>
        </div>

        <div className="p-8">
          <p className="text-xl font-medium text-center">
            No Wallet No Worries Let's create New One
          </p>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <button
            onClick={handleCreateNew}
            className="bg-customPurple text-white font-medium py-2 px-6 rounded-md hover:bg-hoverPurple"
          >
            Create New
          </button>
        </div>

      </div>
    </div>
  );
}

export default Home;