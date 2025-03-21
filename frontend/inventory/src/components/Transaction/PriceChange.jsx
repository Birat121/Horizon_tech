import React, { useState } from "react";

const PriceChange = () => {

return(
  <div className=" w-full h-[85vh] ml-14 bg-gray-300 p-7 py-2 px-2 rounded">
      <div className="flex items-center">
        <span className="text-purple-800 font-bold mr-2">Excel File</span>
        <input
          type="text"
          className="flex-grow p-2 border border-gray-300 rounded mr-2"
        />
        <button className="bg-gray-200 border border-gray-300 rounded px-4 py-2 cursor-pointer">
          Import...
        </button>
      </div>



    {/* table section */}
    <div className="mt-6 overflow-x-auto"> {/* Add horizontal scroll if needed */}
      <table className="min-w-full divide-y divide-gray-200">
        <thead className=" bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold  items-center">
          <tr>
            <th className="border px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Sr.
            </th>
            <th className="border px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Product Id
            </th>
            <th className="border px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Product Name
            </th>
            <th className="border px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Available Stock
            </th>
            <th className="border px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Old Price
            </th>
            <th className="border px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              New Price
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {/* Add your data rows here */}
          <tr>
            <td className="border px-6 py-4 text-center ">1</td>
            <td className="border px-6 py-4 "></td>
            <td className="boder px-6 py-4 "></td>
            <td className="border px-6 py-4 "></td>
            <td className="boder  px-6 py-4 "></td>
            <td className="border px-6 py-4 "></td>
          </tr>
           </tbody>
      </table>



      {/* security verification form */}
      <div className="mt-5 bg-white p-8 rounded-lg shadow-md w-96 mx-auto">
      <div className="flex items-center justify-center mb-6">
        <h2 className="text-lg font-semibold text-black">Security Verification</h2>
      </div>

      <div className="mb-4">
        <div className="flex items-center border rounded p-2">
           <input
            type="text"
            placeholder="Username"
            className="flex-grow border-none focus:outline-none"
          />
          </div>
       <div className="mb-6">
        <div className="flex items-center border rounded p-2">
           <input
            type="password"
            placeholder="Password"
            className="flex-grow border-none focus:outline-none"
          />
        </div>
        </div>
        <div className="flex justify-around">
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded-full flex items-center">
          <span className="mr-2">Export</span>
          <span className="bg-white text-blue-500 rounded-full w-6 h-6 flex items-center justify-center">
            &raquo;
          </span>
        </button>
      </div>
      </div> 
    </div>

    

      {/* Action Buttons */}

    <div className="mt-8 flex justify-between">
        <button className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-bold py-2 px-4 rounded-full flex items-center">         
          <span>Save</span>
        </button>

        <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-2 px-4 rounded-full flex items-center">          
          <span>Cancel</span>
        </button>
      </div>    
    </div>    
    </div>
    
);  
}
export default PriceChange;