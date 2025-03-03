import React, { useState } from "react";

const CategoryMaster = () => {
  const [isVatable, setIsVatable] = useState(false);
  const [vatRate, setVatRate] = useState(0.0);

  const handleVatableChange = () => {
    setIsVatable(!isVatable);
    setVatRate(!isVatable ? 15.0 : 0.0); // Example VAT rate of 15% when selected
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      
      <div className="bg-white border-2 p-6 rounded-md shadow-lg w-full max-w-lg">
      <h1 className=" text-white text-lg font-semibold p-2 rounded-md mb-2">
            Category Master
          </h1>
        <h2 className="text-lg font-bold mb-4 text-center text-blue-700">
          Create / Modify Category
        </h2>
        <div className="space-y-4">
          {/* Category Name */}
          <div>
            <label className="block text-gray-700 font-medium">
              Category Name:
            </label>
            <select
              className="w-full p-2 border rounded-md"
              defaultValue=""
            >
              <option value="" disabled>
                Select Category
              </option>
              <option>Electronics</option>
              <option>Furniture</option>
              <option>Clothing</option>
            </select>
          </div>

          {/* Vatable and Non-Vatable Options */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="vatable"
                checked={isVatable}
                onChange={handleVatableChange}
                className="mr-2"
              />
              <label htmlFor="vatable" className="text-gray-700 font-medium">
                Vatable Item
              </label>
            </div>
            <p className="text-red-500 font-medium">{vatRate.toFixed(2)} %</p>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="non-vatable"
                checked={!isVatable}
                onChange={handleVatableChange}
                className="mr-2"
              />
              <label htmlFor="non-vatable" className="text-gray-700 font-medium">
                Non Vatable Item
              </label>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-between">
          <button className="bg-save text-white px-4 py-2 rounded-md hover:bg-save-hover">
            Save
          </button>
          <button className="bg-modify text-white px-4 py-2 rounded-md hover:bg-modify-hover">
            Modify
          </button>
          <button className="bg-cancel text-white px-4 py-2 rounded-md hover:bg-cancel-hover">
            Cancel
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default CategoryMaster;
