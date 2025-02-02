import React, { useState } from "react";

const VendorPurchaseReturnCategoryWise = () => {
  const [transactionType, setTransactionType] = useState("Purchase");
  const [categoryType, setCategoryType] = useState("All Category");
  const [fromDate1, setFromDate1] = useState("");
  const [toDate1, setToDate1] = useState("");
  const [fromDate2, setFromDate2] = useState("");
  const [toDate2, setToDate2] = useState("");
  const [vendorType, setVendorType] = useState("All Vendors");

  const handleVendorTypeChange = (type) => setVendorType(type);
  const handleCategoryTypeChange = (type) => setCategoryType(type);

  return (
    <div className="flex flex-col h-[90vh] rounded-lg overflow-y-auto bg-gray-50">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/3 bg-gray-100 p-4 border-r border-gray-300">
          <div className="bg-green-600 text-white text-lg font-semibold p-2 rounded-md mb-2">
            Vendor Purchase / Return Category Wise
          </div>

          {/* Transaction Type */}
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <label className="block font-semibold mb-2">
              Select Transaction Type Here
            </label>
            <label className="block">
              <input
                type="radio"
                name="transactionType"
                value="Purchase"
                checked={transactionType === "Purchase"}
                onChange={(e) => setTransactionType(e.target.value)}
                className="mr-2"
              />
              Purchase
            </label>
            <label className="block">
              <input
                type="radio"
                name="transactionType"
                value="Purchase Return"
                checked={transactionType === "Purchase Return"}
                onChange={(e) => setTransactionType(e.target.value)}
                className="mr-2"
              />
              Purchase Return
            </label>
          </div>

          {/* Vendor Type */}
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <label className="block font-semibold mb-2">
              Select Vendor Type Here
            </label>
            <label className="block">
              <input
                type="radio"
                name="vendorType"
                value="All Vendors"
                onChange={() => handleVendorTypeChange("All Vendors")}
                checked={vendorType === "All Vendors"}
                className="mr-2"
              />
              All Vendors
            </label>
            <label className="block">
              <input
                type="radio"
                name="vendorType"
                value="Particular Vendor"
                onChange={() => handleVendorTypeChange("Particular Vendor")}
                checked={vendorType === "Particular Vendor"}
                className="mr-2"
              />
              Particular Vendor
            </label>
            {vendorType === "Particular Vendor" && (
              <select className="w-full p-2 border border-gray-400 rounded mt-2">
                <option>Select Vendor</option>
                <option>Vendor 1</option>
                <option>Vendor 2</option>
                <option>Vendor 3</option>
              </select>
            )}
          </div>

          {/* Category Type */}
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <label className="block font-semibold mb-2">
              Select Category Type Here
            </label>
            <label className="block">
              <input
                type="radio"
                name="categoryType"
                value="All Category"
                onChange={() => handleCategoryTypeChange("All Category")}
                checked={categoryType === "All Category"}
                className="mr-2"
              />
              All Categories
            </label>
            <label className="block">
              <input
                type="radio"
                name="categoryType"
                value="Particular Category"
                onChange={() => handleCategoryTypeChange("Particular Category")}
                checked={categoryType === "Particular Category"}
                className="mr-2"
              />
              Particular Category
            </label>
            {categoryType === "Particular Category" && (
              <select className="w-full p-2 border border-gray-400 rounded mt-2">
                <option>Select Category</option>
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
              </select>
            )}
          </div>

          {/* Date Selection */}
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <label className="block font-semibold mb-2">Select Date Here</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="font-medium mb-1">From:</label>
                <input
                  type="date"
                  className="border p-2 rounded w-full"
                  value={fromDate1}
                  onChange={(e) => setFromDate1(e.target.value)}
                />
              </div>
              <div>
                <label className="font-medium mb-1">To:</label>
                <input
                  type="date"
                  className="border p-2 rounded w-full"
                  value={toDate1}
                  onChange={(e) => setToDate1(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-medium mb-1">From:</label>
                <input
                  type="date"
                  className="border p-2 rounded w-full"
                  value={fromDate2}
                  onChange={(e) => setFromDate2(e.target.value)}
                />
              </div>
              <div>
                <label className="font-medium mb-1">To:</label>
                <input
                  type="date"
                  className="border p-2 rounded w-full"
                  value={toDate2}
                  onChange={(e) => setToDate2(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-4 mt-10">
            <button className="w-full flex items-center justify-center p-3 bg-preview text-white rounded hover:bg-preview-hover">
              <i className="fa fa-search mr-2"></i> Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorPurchaseReturnCategoryWise;
