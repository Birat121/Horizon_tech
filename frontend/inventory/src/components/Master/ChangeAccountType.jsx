import React from 'react'

const ChangeAccountType = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='p-6 bg-white shadow-md rounded-lg w-full max-w-md' >
        <h2 className='text-xl font-semibold mb-4 text-center'>Change Account Type</h2>
        <h2 className='text-lg font-semibold mb-4'>Select Account</h2>

        <form className='space-y-4'>
          <div className='mb-4'>
            <label className='block mb-2'>Group Code:</label>
            <input className='border border-gray-300 rounded-md px-2 py-1 w-full' type="text" placeholder="" />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Group Name:</label>
            <select className='border border-gray-300 rounded-md px-2 py-1 w-full'>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Account Type:</label>
            <select className='border border-gray-300 rounded-md px-2 py-1 w-full'>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>
        </form>
        <div className='flex justify-between mt-4'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit">Save</button>
          <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' type="button">Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default ChangeAccountType