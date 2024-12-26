import React from 'react'

const AccountReGrouping = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow'>
        <h1 className='text-2xl font-semibold mb-4 text-center'>Account Re Grouping</h1>
        <form className='space-y-4'>
          <div className='mb-4'>
            <label className='block mb-2'>Select Account Name:</label>
            <select className='border border-gray-300 rounded-md px-2 py-1 w-full'>
              <option value="Account1">Account1</option>
              <option value="Account2">Account2</option>
              <option value="Account3">Account3</option>
            </select>
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Change Group Name:</label>
            <select className='border border-gray-300 rounded-md px-2 py-1 w-full'>
              <option value="Group1">Group1</option>
              <option value="Group2">Group2</option>
            </select>
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Account Type</label>
            <input className='border border-gray-300 rounded-md px-2 py-1 w-full' type="text" placeholder='' />
          </div>
          
        </form>
        <div className='flex justify-between mt-4'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Save</button>
          <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Cancel</button>
        </div>

      </div>
    </div>
  )
}

export default AccountReGrouping