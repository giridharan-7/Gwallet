import React from 'react'

function NewUserPage() {
  return (
    <div className='bg-purple min-h-screen text-customPurple w-full flex flex-col justify-center items-center dotted-background'>
      <div className='text-center p-6'>
        <h1>Let's get started to Your new web wallet</h1>
      </div>
      <div className='p-6'>
        <label htmlFor="password" className='px-7' >Enter Password:</label>
        <input className='w-64 px-4 py-2 border rounded-md focus:outline-none focus-ring-2 focus:ring-blue-500' type='password' id='password' placeholder='password'/>
      </div>
      <div className='p-6'>
        <label htmlFor='password' className='px-4'>Confirm Password:</label>
        <input className='w-64 px-4 py-2 border rounded-md focus:outline-none focus-ring-2 focus:ring-blue-500' type='password' id='password' placeholder='Confirm password'/>
      </div>
      <div>
        <button className="bg-customPurple text-white font-medium py-2 px-6 rounded-md hover:bg-hoverPurple">Next</button>
      </div>
    </div>
  )
}

export default NewUserPage;