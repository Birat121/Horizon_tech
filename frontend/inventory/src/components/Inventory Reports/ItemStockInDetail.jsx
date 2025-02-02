import React, { useState } from "react";

const ItemStockInDetail = () => {
  const [selectedBranchType, setSelectedBranchType] = useState(""); // Tracks selected vendor type
  const [selectedPurchaseDateType, setSelectedPurchaseDateType] = useState(""); // Tracks selected purchase date type
  const [selectedProductName, setSelectedProductName] = useState("");
  const [fromDate1, setFromDate1] = useState(""); // First "From" date
  const [toDate1, setToDate1] = useState(""); // First "To" date
  const [fromDate2, setFromDate2] = useState(""); // Second "From" date
  const [toDate2, setToDate2] = useState(""); // Second "To" date

  const handleBranchTypeChange = (type) => {
    setSelectedBranchType(type);
  };

  const handlePurchaseDateChange = (type) => {
    setSelectedPurchaseDateType(type);
  };

  const handleProductTypeChange = (type) => {
    setSelectedProductName(type);
  };

  return (
    <div className="flex flex-col h-[90vh] rounded-lg overflow-y-auto bg-gray-50">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/3 bg-gray-100 p-4 border-r border-gray-300">
          <h1 className=" text-white text-lg font-semibold p-2 rounded-md mb-2">
            Item Stock In Detail
          </h1>

          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <label className="block font-semibold mb-2">
              Select Product Name Here
            </label>
            <label className="block">
              <input
                type="radio"
                name="productType"
                value="particularProduct"
                className="mr-2"
                onChange={() => handleProductTypeChange("particularProduct")}
                checked={selectedProductName === "particularProduct"}
              />
              Particular Product
            </label>
          {/* Dropdown for Particular Vendor */}
          <div className="mb-2 mt-5">
            <select className="w-full p-2 border border-gray-400 rounded mb-2">
              <option>Select Category</option>
              <option>Category 1</option>
              <option>Category 2</option>
              <option>Category 3</option>
            </select>
          </div>

          </div>

          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <label className="block font-semibold mb-2">
              Select Branch Type Here
            </label>
            <label className="block">
              <input
                type="radio"
                name="BranchType"
                value="allBranch"
                className="mr-2"
                onChange={() => handleBranchTypeChange("allBranch")}
                checked={selectedBranchType === "allBranch"}
              />
              All Branch
            </label>
            <label className="block">
              <input
                type="radio"
                name="BranchType"
                value="particularsBranch"
                className="mr-2"
                onChange={() => handleBranchTypeChange("particularsBranch")}
                checked={selectedBranchType === "particularsBranch"}
              />
              Particulars Branch
            </label>
          </div>
          {/* Selected Purchase Date */}
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <label className="block font-semibold mb-2">Select Date Here</label>
            <label className="flex items-center">
              <input
                type="radio"
                name="purchaseDate"
                value="selectedPurchaseDate"
                className="mr-2"
                onChange={() =>
                  handlePurchaseDateChange("selectedPurchaseDate")
                }
                checked={selectedPurchaseDateType === "selectedPurchaseDate"}
              />
              Selected Purchase Date
            </label>
            {selectedPurchaseDateType === "selectedPurchaseDate" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="font-medium mb-1">From:</label>
                  <input
                    type="date"
                    className="border p-2 rounded w-full"
                    value={fromDate1}
                    onChange={(e) => setFromDate1(e.target.value)}
                  />
                  <label className="font-medium mb-1">From:</label>
                  <input
                    type="date"
                    className="border p-2 rounded w-full"
                    value={fromDate2}
                    onChange={(e) => setToDate2(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium mb-1">To:</label>
                  <input
                    type="date"
                    className="border p-2 rounded w-full"
                    value={toDate1}
                    onChange={(e) => setToDate1(e.target.value)}
                  />
                  <label className="font-medium mb-1">To:</label>
                  <input
                    type="date"
                    className="border p-2 rounded w-full"
                    value={toDate2}
                    onChange={(e) => setFromDate2(e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="space-y-4 mt-10">
            <button className="w-full flex items-center justify-center p-3 bg-green-500 text-white rounded hover:bg-green-600">
              <i className="fa fa-search mr-2"></i> Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemStockInDetail;
