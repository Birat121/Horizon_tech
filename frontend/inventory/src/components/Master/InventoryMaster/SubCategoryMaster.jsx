import React from "react";

const SubCategoryMaster = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white border-2  p-6 rounded-md shadow-lg w-full max-w-lg">
      <h1 className=" text-white text-lg font-semibold p-2 rounded-md mb-2">
            SubCategory Master
          </h1>
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
          <button className="bg-save text-white px-4 py-2 rounded-md hover:bg-save-cancel">
            Save
          </button>
          <button className="bg-modify text-white px-4 py-2 rounded-md hover:bg-modify-cancel">
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

export default SubCategoryMaster;
