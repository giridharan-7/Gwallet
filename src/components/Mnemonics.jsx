import React from 'react'

function Mnemonics() {
  return (
    <div className='bg-purple min-h-screen w-full text-customPurple flex flex-col justify-center items-center dotted-background'>
      <div className='p-8'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold'>Here is your Mnemonics save it in safe place</h1>
        </div>
        <div>
          {/* The 12 random words will be displayed here */}
        </div>
        <div className='flex flex-col justify-center items-center'>
          <button className="bg-customPurple text-white font-medium py-2 px-6 rounded-md hover:bg-hoverPurple">Next</button>
        </div>
      </div>
    </div>
  )
}

export default Mnemonics