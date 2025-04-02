import React from "react";

const SubCategoryMaster = () => {
  return (
    <div className="flex items-center justify-center h-[85vh]">
      <div className="bg-white border-2 p-8 rounded-md shadow-lg w-full max-w-2xl">
        <h1 className="text-white text-center text-xl font-semibold p-3 rounded-md mb-3">
          SubCategory Master
        </h1>
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create / Modify Sub Category
        </h2>
        <div className="space-y-6">
          {/* Category Name */}
          <div>
            <label className="block text-gray-700 font-medium text-lg">
              Category Name:
            </label>
            <select
              className="w-full p-3 border rounded-md text-lg"
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
            <label className="block text-gray-700 font-medium text-lg">
              Sub Category Name:
            </label>
            <select
              className="w-full p-3 border rounded-md bg-yellow-100 text-lg"
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
            <label className="block text-gray-700 font-medium text-lg">
              Vat Rate:
            </label>
            <p className="text-red-500 font-medium text-lg">0.00 %</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-between">
          <button className="bg-save text-white px-6 py-3 rounded-md text-lg hover:bg-save-cancel">
            Save
          </button>
          <button className="bg-modify text-white px-6 py-3 rounded-md text-lg hover:bg-modify-cancel">
            Modify
          </button>
          <button className="bg-cancel text-white px-6 py-3 rounded-md text-lg hover:bg-cancel-hover">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubCategoryMaster;
