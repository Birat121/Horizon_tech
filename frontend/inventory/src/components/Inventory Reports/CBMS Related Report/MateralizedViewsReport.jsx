import React, { useState } from "react";

const MaterializedViewsReport = () => {
  const [selectedTransactionType, setSelectedTransactionType] = useState("");
  const [selectedDateType, setSelectedDateType] = useState("");
  const [fromDate1, setFromDate1] = useState("");
  const [toDate1, setToDate1] = useState("");
  const [fromDate2, setFromDate2] = useState("");
  const [toDate2, setToDate2] = useState("");

  return (
    <div className="flex flex-col h-[85vh] bg-white border-2 rounded-lg shadow-lg overflow-y-auto ml-14">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/3 bg-gray-100 p-4 border-r border-gray-300">
          <h1 className=" text-white text-lg font-semibold p-2 rounded-md mb-2">
            Materialized Views Report
          </h1>

          {/* Report Between Date */}
          <div className="border border-gray-300 p-4 rounded mb-4">
            <label className="block font-semibold mb-2">Select Fiscal Year</label>
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="selectedDateType"
                className="mr-2"
                onChange={() => setSelectedDateType("fiscalYearWise")}
                checked={selectedDateType === "fiscalYearWise"}
              />
              Fiscal Year Wise
            </label>
            <select
              className="w-full p-2 border border-gray-400 rounded mb-2"
              disabled={selectedDateType !== "fiscalYearWise"}
            >
              <option>Select Category</option>
              <option>Category 1</option>
              <option>Category 2</option>
              <option>Category 3</option>
            </select>
          </div>

          {/* Selected Date Range */}
          <div className="border border-gray-300 p-4 rounded mb-4">
            <h3 className="text-md font-semibold mb-2">Select Date Range</h3>
            <label className="flex items-center mb-4">
              <input
                type="radio"
                name="purchaseDate"
                className="mr-2"
                onChange={() => setSelectedDateType("selectedPurchaseDate")}
                checked={selectedDateType === "selectedPurchaseDate"}
              />
              Selected Date Wise
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-medium mb-1 block">From:</label>
                <input
                  type="date"
                  className="border p-2 rounded w-full"
                  value={fromDate1}
                  onChange={(e) => setFromDate1(e.target.value)}
                  disabled={selectedDateType !== "selectedPurchaseDate"}
                />
              </div>
              <div>
                <label className="font-medium mb-1 block">To:</label>
                <input
                  type="date"
                  className="border p-2 rounded w-full"
                  value={toDate1}
                  onChange={(e) => setToDate1(e.target.value)}
                  disabled={selectedDateType !== "selectedPurchaseDate"}
                />
              </div>
              <div>
                <label className="font-medium mb-1 block">Comparison From:</label>
                <input
                  type="date"
                  className="border p-2 rounded w-full"
                  value={fromDate2}
                  onChange={(e) => setFromDate2(e.target.value)}
                  disabled={selectedDateType !== "selectedPurchaseDate"}
                />
              </div>
              <div>
                <label className="font-medium mb-1 block">Comparison To:</label>
                <input
                  type="date"
                  className="border p-2 rounded w-full"
                  value={toDate2}
                  onChange={(e) => setToDate2(e.target.value)}
                  disabled={selectedDateType !== "selectedPurchaseDate"}
                />
              </div>
            </div>
          </div>

          {/* Transaction Type */}
          <div className="border border-gray-300 p-4 rounded mb-4">
            <h2 className="text-lg font-bold mb-2">Select Transaction Type</h2>
            {["Sales", "Sync Completed Invoice", "Sync Incomplete Invoice"].map(
              (type, index) => (
                <label key={index} className="block">
                  <input
                    type="radio"
                    name="transactionType"
                    className="mr-2"
                    onChange={() => setSelectedTransactionType(type.toLowerCase().replace(/\s+/g, ""))}
                    checked={selectedTransactionType === type.toLowerCase().replace(/\s+/g, "")}
                  />
                  {type}
                </label>
              )
            )}
          </div>

          {/* Buttons */}
          <div className="mt-10">
            <button className="w-full flex items-center justify-center p-3 bg-green-500 text-white rounded hover:bg-green-600">
              <i className="fa fa-search mr-2"></i> Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterializedViewsReport;
