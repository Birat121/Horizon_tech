import React, { useState } from "react";

const BonusReceivedFromVendor = () => {
  
  const [selectedVendorType, setSelectedVendorType] = useState(""); // "allVendor" or "particularvendor"
  const [fromDate1, setFromDate1] = useState(""); // First "From" date
  const [toDate1, setToDate1] = useState(""); // First "To" date
  const [fromDate2, setFromDate2] = useState(""); // Second "From" date
  const [toDate2, setToDate2] = useState(""); // Second "To" date
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  
  const handleVendorTypeChange = (type) => {
    setSelectedVendorType(type);
  };

  return (
    <div className="flex flex-col h-[90vh] rounded-lg overflow-y-auto bg-gray-50">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/3 bg-gray-100 p-4 border-r border-gray-300">
          {/* Date Pickers */}
          <div className="mb-2">
            <label className="block font-semibold mb-2">As On Date</label>
            <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
              <input
                type="date"
                className="p-2 border border-gray-300 rounded w-full sm:w-3/4 md:w-1/2 lg:w-1/3"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
              <input
                type="date"
                className="p-2 border border-gray-300 rounded w-full sm:w-3/4 md:w-1/2 lg:w-1/3"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </div>
          </div>

          {/* First Date Picker */}
          <div className="mb-2">
            <h3 className="text-md font-semibold mb-2">Select Purchase Date Here..</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="font-medium mb-1">From:</label>
                <input
                  type="date"
                  className="border p-2 rounded w-full"
                  value={fromDate1}
                  onChange={(e) => setFromDate1(e.target.value)}
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
              </div>
            </div>
          </div>

          {/* Second Date Picker */}
          <div className="mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="font-medium mb-1">From:</label>
                <input
                  type="date"
                  className="border p-2 rounded w-full"
                  value={fromDate2}
                  onChange={(e) => setFromDate2(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
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

          

          {/* Account Type Radio Group */}
          <div className="mb-4">
            <h2 className="text-lg font-bold mb-2">Select Vendor Type here...</h2>
            <label className="block">
              <input
                type="radio"
                name="vendorType"
                value="allVendor"
                className="mr-2"
                onChange={() => handleVendorTypeChange("allVendor")}
                checked={selectedVendorType === "allVendor"}
              />
              All Vendor
            </label>
            <label className="block">
              <input
                type="radio"
                name="vendorType"
                value="particularVendor"
                className="mr-2"
                onChange={() => handleVendorTypeChange("particularVendor")}
                checked={selectedVendorType === "particularVendor"}
              />
              Particular Vendor
            </label>
          </div>

          {/* Dropdown for Particulars Category */}
          {selectedVendorType === "particularVendor" && (
            <div className="mb-4">
              <select className="w-full p-2 border border-gray-400 rounded mb-2">
                <option>Select Category</option>
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
              </select>
            </div>
          )}

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

export default BonusReceivedFromVendor;