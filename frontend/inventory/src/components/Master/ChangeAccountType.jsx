import React from 'react'
import Button from '../../reusable inputs/buttons'

const ChangeAccountType = () => {
  return (
    <div className='h-[90vh] flex items-center justify-center'>
      <div className='p-10 bg-white border-2 rounded-lg shadow-lg w-full max-w-lg'>
        <h2 className="text-center text-2xl font-semibold p-3 rounded-md mb-4">
          Change Account Type
        </h2>
        <div className="bg-white shadow-md rounded-md p-5 mb-6">
          <label className="block font-semibold mb-3 text-lg">Select Account</label>
          <form className='space-y-6'>
            <div className='mb-5'>
              <label className='block mb-2 text-gray-700 font-medium text-lg'>Group Code:</label>
              <input className='border border-gray-300 rounded-lg px-3 py-2 w-full text-lg' type="text" placeholder="" />
            </div>
            <div className='mb-5'>
              <label className='block mb-2 text-gray-700 font-medium text-lg'>Group Name:</label>
              <select className='border border-gray-300 rounded-lg px-3 py-2 w-full text-lg'>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            </div>
            <div className='mb-5'>
              <label className='block mb-2 text-gray-700 font-medium text-lg'>Account Type:</label>
              <select className='border border-gray-300 rounded-lg px-3 py-2 w-full text-lg'>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            </div>
          </form>
        </div>
        <div className='flex justify-center space-x-6 mt-6'>
          <Button type="save">Save</Button>
          <Button type="cancel">Cancel</Button>
        </div>
      </div>
    </div>
  )
}

export default ChangeAccountType
