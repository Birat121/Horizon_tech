import React, { useState } from "react";
import Button from "../../reusable inputs/buttons";

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
    <div className="flex flex-col h-[85vh] bg-white border-2 rounded-lg shadow-lg overflow-hidden ml-8">
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
          <div className="flex flex-col items-center space-y-4 mt-auto w-full">
  <Button className="w-full" type="save">Grid View</Button>
  <Button className="w-full" type="preview">Preview</Button>
  <Button className="w-full" type="cancel">Cancel</Button>
</div>


        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white"></div>
      </div>
    </div>
  );
};

export default InventoryItemList;
