import React from "react";

const InventoryItemMaster = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      

      <div className="w-full max-w-4xl bg-white p-6 shadow-lg rounded-lg mt-4">
      <header className="w-full bg-blue-600 text-white py-4 shadow-md mb-2">
        <h1 className="text-center text-2xl font-bold">Inventory Item Master</h1>
      </header>
        <div className="tabs flex space-x-4 mb-6">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300">Product Information</button>
          <button className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400">UOM And Barcode Setting</button>
          <button className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400">Multiple Retail Price</button>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
          <h2 className="text-xl font-bold mb-4">Product Detail</h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-medium">Product Name</label>
              <input
                type="text"
                placeholder="Enter product name"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Category Name</label>
              <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300">
                <option value="">Select category</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">Sub Category Name</label>
              <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300">
                <option value="">Select subcategory</option>
                <option value="subcategory1">Subcategory 1</option>
                <option value="subcategory2">Subcategory 2</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">Cost Price</label>
              <input
                type="number"
                placeholder="Enter cost price"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Retail Price</label>
              <input
                type="number"
                placeholder="Enter retail price"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Whole Sale Rate</label>
              <input
                type="number"
                placeholder="Enter wholesale rate"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">H. S. Code</label>
              <input
                type="text"
                placeholder="Enter H. S. code"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300">Save</button>
          <button className="px-6 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300">Modify</button>
          <button className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300">Cancel</button>
          <button className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300">Close</button>
        </div>
      </div>
    </div>
  );
};

export default InventoryItemMaster;
