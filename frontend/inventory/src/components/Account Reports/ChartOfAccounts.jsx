import React, { useState } from "react";

const ChartOfAccounts = () => {
  // State to track selected product type and checkbox status
  const [selectedProductType, setSelectedProductType] = useState(""); // "all" or "particulars"

  const handleProductTypeChange = (type) => {
    setSelectedProductType(type);
    if (type !== "particulars") {
      setIsWithSubCategoryChecked(false); // Uncheck and disable the checkbox
    }
  };
  return (
    <div className="flex flex-col h-[90vh] rounded-lg overflow-hidden">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-100 p-4 border-r border-gray-300">
          <div className="bg-green-600 text-white text-lg font-semibold p-2 rounded-md mb-2">
            Chart Of Accounts
          </div>
          {/* Header */}
          <div className="bg-white shadow-md rounded-md p-4 mb-2 mt-4">
            <label className="block font-semibold mb-2">
              Select Group Type{" "}
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
                ALL Group
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
                Particulars Group
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
          </div>

          {/* Buttons */}
          <div className="space-y-4 mt-4">
            <button className="w-full flex items-center justify-center p-3 bg-blue-500 hover:bg-blue-600 text-white rounded shadow">
              <i className="fa fa-search mr-2"></i> Preview
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white"></div>
      </div>
    </div>
  );
};

export default ChartOfAccounts;
