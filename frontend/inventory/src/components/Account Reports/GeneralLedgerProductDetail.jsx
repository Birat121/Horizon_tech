import React, { useState } from "react";

const GeneralLedgerProductDetail = () => {
  const [selectedProductType, setSelectedProductType] = useState(""); // "all" or "particulars"
  const [fromDate1, setFromDate1] = useState("");
  const [toDate1, setToDate1] = useState("");
  const [fromDate2, setFromDate2] = useState("");
  const [toDate2, setToDate2] = useState("");

  const handleProductTypeChange = (type) => {
    setSelectedProductType(type);
  };

  return (
    <div className="flex flex-col h-[80vh] bg-white border rounded-lg shadow overflow-hidden ml-4 p-4">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/3 bg-gray-100 p-3 border-r border-gray-300">
          <h1 className="text-gray-700 text-md font-semibold p-2 rounded mb-2">Ledger With Product Detail</h1>
          {/* Select Date Section */}
          <div className="bg-white shadow rounded p-3">
            <label className="block font-medium mb-2 text-sm">Select Date Here</label>

            {/* First Date Picker */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="flex flex-col">
                <label className="text-xs mb-1">From:</label>
                <input
                  type="date"
                  className="border p-1 rounded text-xs"
                  value={fromDate1}
                  onChange={(e) => setFromDate1(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs mb-1">To:</label>
                <input
                  type="date"
                  className="border p-1 rounded text-xs"
                  value={toDate1}
                  onChange={(e) => setToDate1(e.target.value)}
                />
              </div>
            </div>

            {/* Second Date Picker */}
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col">
                <label className="text-xs mb-1">From:</label>
                <input
                  type="date"
                  className="border p-1 rounded text-xs"
                  value={fromDate2}
                  onChange={(e) => setFromDate2(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs mb-1">To:</label>
                <input
                  type="date"
                  className="border p-1 rounded text-xs"
                  value={toDate2}
                  onChange={(e) => setToDate2(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Radio Buttons */}
          <div className="bg-white shadow rounded p-3 mt-3">
            <label className="block font-medium mb-2 text-sm">Select Account Type Here</label>
            <label className="block text-xs">
              <input
                type="radio"
                name="productType"
                value="particulars"
                className="mr-1"
                onChange={() => handleProductTypeChange("particulars")}
                checked={selectedProductType === "particulars"}
              />
              Select Ledger
            </label>
            {/* Dropdown for Particulars Category */}
            {selectedProductType === "particulars" && (
              <div className="mt-2">
                <select className="w-full p-1 border border-gray-400 rounded text-xs">
                  <option>Select Category</option>
                  <option>Category 1</option>
                  <option>Category 2</option>
                  <option>Category 3</option>
                </select>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="mt-4">
            <button className="w-full p-2 bg-blue-500 text-white rounded text-xs hover:bg-blue-600">
              <i className="fa fa-search mr-1"></i> Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralLedgerProductDetail;

