import React, { useState } from "react";
import Button from "../../../reusable inputs/buttons";

const CategoryMaster = () => {
  const [isVatable, setIsVatable] = useState(false);
  const [vatRate, setVatRate] = useState(0.0);

  const handleVatableChange = () => {
    setIsVatable(!isVatable);
    setVatRate(!isVatable ? 15.0 : 0.0); // Example VAT rate of 15% when selected
  };

  return (
    <div className="flex items-center justify-center h-[90vh]">
      <div className="bg-white border-2 p-10 rounded-lg shadow-xl w-full max-w-2xl">
        <h1 className="text-white text-xl text-center font-semibold p-3 rounded-md mb-4">
          Category Master
        </h1>
        <h2 className="text-xl font-bold mb-6 text-center">
          Create / Modify Category
        </h2>
        <div className="space-y-6">
          {/* Category Name */}
          <div>
            <label className="block text-gray-700 font-medium text-lg">
              Category Name:
            </label>
            <select className="w-full p-3 border rounded-lg text-lg">
              <option value="" disabled>
                Select Category
              </option>
              <option>Electronics</option>
              <option>Furniture</option>
              <option>Clothing</option>
            </select>
          </div>

          {/* Vatable and Non-Vatable Options */}
          <div className="flex items-center justify-between text-lg">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="vatable"
                checked={isVatable}
                onChange={handleVatableChange}
                className="mr-3 w-5 h-5"
              />
              <label htmlFor="vatable" className="text-gray-700 font-medium">
                Vatable Item
              </label>
            </div>
            <p className="text-red-500 font-bold">{vatRate.toFixed(2)} %</p>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="non-vatable"
                checked={!isVatable}
                onChange={handleVatableChange}
                className="mr-3 w-5 h-5"
              />
              <label htmlFor="non-vatable" className="text-gray-700 font-medium">
                Non Vatable Item
              </label>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-between">
          <Button type="save" className="px-6 py-3 text-lg">Save</Button>
          <Button type="modify" className="px-6 py-3 text-lg">Modify</Button>
          <Button type="cancel" className="px-6 py-3 text-lg">Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryMaster;
