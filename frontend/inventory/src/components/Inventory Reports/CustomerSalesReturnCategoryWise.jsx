import React, { useState } from "react";
import Button from "../../reusable inputs/buttons";

const CustomerSalesReturnCategoryWise = () => {
  const [transactionType, setTransactionType] = useState(""); // Voucher type state
  const [selectedVendorType, setSelectedVendorType] = useState(""); // "all" or "particulars"
  const [fromDate1, setFromDate1] = useState(""); // First "From" date
  const [toDate1, setToDate1] = useState(""); // First "To" date
  const [fromDate2, setFromDate2] = useState(""); // Second "From" date
  const [toDate2, setToDate2] = useState(""); // Second "To" date
  const [categoryType, setCategoryType] = useState("Invoice Wise"); // Report type state

  const handleVendorTypeChange = (type) => {
    setSelectedVendorType(type);
  };

  const handleCategoryTypeChange = (type) => {
    setCategoryType(type);
  };

  return (
    <div className="flex flex-col h-[85vh] bg-white border-2 rounded-lg shadow-lg overflow-y-auto ml-14">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/3 bg-gray-100 p-4 border-r border-gray-300">
          <h1 className=" text-white text-lg font-semibold p-2 rounded-md mb-2">
            Customer Sales / Sales Return Category Wise
          </h1>
          {/* Voucher Type Radio Buttons */}
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <label className="block font-semibold mb-2">
              Select Transaction Type Here
            </label>
            <label className="block">
              <input
                type="radio"
                name="transactionType"
                value="Sales"
                checked={transactionType === "Sales"}
                onChange={(e) => setTransactionType(e.target.value)}
                className="mr-2"
              />
              Sales
            </label>
            <label className="block">
              <input
                type="radio"
                name="transactionType"
                value="Sales Return"
                checked={transactionType === "Sales Return"}
                onChange={(e) => setTransactionType(e.target.value)}
                className="mr-2"
              />
              Sales Return
            </label>
          </div>

          {/* Report Type Radio Buttons */}
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <label className="block font-semibold mb-2">
              Select Vendor Type Here
            </label>
            <label className="block">
              <input
                type="radio"
                name="vendorType"
                value="all"
                className="mr-2"
                onChange={() => handleVendorTypeChange("all")}
                checked={selectedVendorType === "all"}
              />
              All Customers
            </label>
            <label className="block">
              <input
                type="radio"
                name="vendorType"
                value="particulars"
                className="mr-2"
                onChange={() => handleVendorTypeChange("particulars")}
                checked={selectedVendorType === "particulars"}
              />
              Particular Customer
            </label>
            {/* Dropdown for Particulars */}
            {selectedVendorType === "particulars" && (
              <div className="mb-4">
                <select className="w-full p-2 border border-gray-400 rounded">
                  <option>Select Category</option>
                  <option>Category 1</option>
                  <option>Category 2</option>
                  <option>Category 3</option>
                </select>
              </div>
            )}
          </div>

          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <label className="block font-semibold mb-2">
              Select Category Type Here
            </label>
            <label className="block">
              <input
                type="radio"
                name="categoryType"
                value="all"
                className="mr-2"
                onChange={() => handleCategoryTypeChange("all")}
                checked={categoryType === "all"}
              />
              All Category
            </label>
            <label className="block">
              <input
                type="radio"
                name="categoryType"
                value="particulars"
                className="mr-2"
                onChange={() => handleCategoryTypeChange("particulars")}
                checked={setCategoryType === "particulars"}
              />
              Particular Category
            </label>
            {/* Dropdown for Particulars */}
            {categoryType === "particulars" && (
              <div className="mb-4">
                <select className="w-full p-2 border border-gray-400 rounded">
                  <option>Select Category</option>
                  <option>Category 1</option>
                  <option>Category 2</option>
                  <option>Category 3</option>
                </select>
              </div>
            )}
          </div>

          {/* Date Selection */}
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <label className="block font-semibold mb-2">Select Date Here</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
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

          {/* Buttons */}
          <div className="space-y-4 mt-10 flex justify-center">
            <Button type="preview"> Preview</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSalesReturnCategoryWise;
