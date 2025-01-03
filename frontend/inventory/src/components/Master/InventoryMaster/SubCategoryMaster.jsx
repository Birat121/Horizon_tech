import React from "react";

const SubCategoryMaster = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white border-2  p-6 rounded-md shadow-lg w-full max-w-lg">
        <h2 className="text-lg font-bold mb-4 text-center text-blue-700">
          Create / Modify Sub Category
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

          {/* Sub Category Name */}
          <div>
            <label className="block text-gray-700 font-medium">
              Sub Category Name:
            </label>
            <select
              className="w-full p-2 border rounded-md bg-yellow-100"
              defaultValue=""
            >
              <option value="" disabled>
                Select Sub Category
              </option>
              <option>Mobile Phones</option>
              <option>Sofas</option>
              <option>Men's Wear</option>
            </select>
          </div>

          {/* VAT Rate */}
          <div>
            <label className="block text-gray-700 font-medium">
              Vat Rate:
            </label>
            <p className="text-red-500 font-medium">0.00 %</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-between">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Save
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
            Modify
          </button>
          <button className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500">
            Cancel
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default SubCategoryMaster;
