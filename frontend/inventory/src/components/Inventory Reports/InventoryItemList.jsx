import React, { useState } from "react";

const InventoryItemList = () => {
  // State to track selected product type and checkbox status
  const [selectedProductType, setSelectedProductType] = useState(""); // "all" or "particulars"
  const [isWithSubCategoryChecked, setIsWithSubCategoryChecked] =
    useState(false);

  const handleProductTypeChange = (type) => {
    setSelectedProductType(type);
    if (type !== "particulars") {
      setIsWithSubCategoryChecked(false); // Uncheck and disable the checkbox
    }
  };

  const handleSubCategoryCheckboxChange = () => {
    setIsWithSubCategoryChecked(!isWithSubCategoryChecked);
  };

  return (
    <div className="flex flex-col h-[90vh] rounded-lg overflow-hidden">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-100 p-4 border-r border-gray-300">
          <h1 className=" text-white text-lg font-semibold p-2 rounded-md mb-2">
            Inventory Item List
          </h1>
          {/* Header */}
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <label className="block font-semibold mb-2">
              Select Product Here
            </label>

            {/* Radio Buttons */}
            <div className="mb-4">
              <label className="block mb-2">
                <input
                  type="radio"
                  name="productType"
                  value="all"
                  className="mr-2"
                  onChange={() => handleProductTypeChange("all")}
                  checked={selectedProductType === "all"}
                />
                ALL Product
              </label>
              <label className="block">
                <input
                  type="radio"
                  name="productType"
                  value="particulars"
                  className="mr-2"
                  onChange={() => handleProductTypeChange("particulars")}
                  checked={selectedProductType === "particulars"}
                />
                Particulars Category
              </label>
            </div>

            {/* Dropdown for Particulars Category */}
            {selectedProductType === "particulars" && (
              <div className="mb-4">
                <select className="w-full p-2 border border-gray-400 rounded mb-2">
                  <option>Select Category</option>
                  <option>Category 1</option>
                  <option>Category 2</option>
                  <option>Category 3</option>
                </select>
              </div>
            )}

            {/* Checkbox */}
            <div className="mb-4">
              <label>
                <input
                  type="checkbox"
                  className="mr-2"
                  onChange={handleSubCategoryCheckboxChange}
                  checked={isWithSubCategoryChecked}
                  disabled={selectedProductType !== "particulars"}
                />
                With Sub Category
              </label>
            </div>

            {/* Dropdown for With Sub Category */}
            <div className="mb-4">
              <select
                className={`w-full p-2 border border-gray-400 rounded ${
                  selectedProductType === "particulars"
                    ? ""
                    : "bg-gray-200 cursor-not-allowed"
                }`}
                disabled={selectedProductType !== "particulars"}
              >
                <option>Select Category</option>
                <option>Finished Goods</option>
                <option>Live Stock</option>
                <option>Packing Materials</option>
                <option>Raw Materials</option>
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-4 mt-auto">
            <button className="w-full flex items-center justify-center p-3 bg-save rounded shadow">
              <i className="fa fa-th mr-2"></i> On Grid
            </button>
            <button className="w-full flex items-center justify-center p-3 bg-preview rounded shadow">
              <i className="fa fa-search mr-2"></i> Preview
            </button>
            <button className="w-full flex items-center justify-center p-3 bg-cancel rounded shadow">
              <i className="fa fa-times-circle mr-2"></i> Close
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white"></div>
      </div>
    </div>
  );
};

export default InventoryItemList;
