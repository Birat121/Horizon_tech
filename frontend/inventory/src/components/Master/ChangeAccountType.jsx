import React from 'react'
import Button from '../../reusable inputs/buttons'

const ChangeAccountType = () => {
  return (
    <div className='h-[85vh] flex items-center justify-center'>
      <div className='p-6 bg-white border-2 rounded-lg shadow-lg w-full max-w-md' >
      <h1 className=" text-white text-lg font-semibold p-2 rounded-md mb-2">
            Change Account Type
        </h1>
        <div className="bg-white shadow-md rounded-md p-4 mb-4">
        <label className="block font-semibold mb-2">Select Account </label>
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
        </div>
        <div className='flex justify-between mt-4'>
        <Button type="save" >Save</Button>
        <Button type="cancel">Cancel</Button>
        </div>

      </div>
    </div>
  )
}

export default ChangeAccountType