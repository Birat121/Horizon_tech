import React, { useState } from "react";

const ProfitAndLoss = () => {
  const [selectedReportType, setSelectedReportType] = useState(""); // "all" or "particulars"
  const [fromDate1, setFromDate1] = useState(""); // First "From" date
  const [toDate1, setToDate1] = useState(""); // First "To" date
  const [fromDate2, setFromDate2] = useState(""); // Se  cond "From" date
  const [toDate2, setToDate2] = useState(""); // Second "To" date

  const handleReportTypeChange = (type) => {
    setSelectedReportType(type);
  };

  return (
    <div className="flex flex-col h-[90vh] rounded-lg overflow-hidden bg-gray-50">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/3 bg-gray-100 p-4 border-r border-gray-300 ">
        <div className="bg-green-600 text-white text-lg font-semibold p-2 rounded-md mb-2">Profit And Loss</div>
          
          {/* Select Date Section */}
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <label className="block font-semibold mb-2">Select Date Here</label>
            {/* First Date Picker */}
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

            {/* Second Date Picker */}
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

          {/* Radio Buttons */}
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <label className="block font-semibold mb-2">Select Report Type</label>
            <div className="flex gap-2 flex-col">
              <label className="block">
                <input
                  type="radio"
                  name="productType"
                  value="particulars"
                  className="mr-2"
                  onChange={() => handleReportTypeChange("summary")}
                  checked={selectedReportType === "summary"}
                />
                Summary
              </label>
              <label className="block">
                <input
                  type="radio"
                  name="productType"
                  value="particulars"
                  className="mr-2"
                  onChange={() => handleReportTypeChange("in-detail")}
                  checked={selectedReportType === "in-detail"}
                />
                In-detail
              </label>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-4 mt-6">
            <button className="w-full flex items-center justify-center p-3 bg-green-500 text-white rounded hover:bg-green-600">
              <i className="fa fa-search mr-2"></i> Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitAndLoss;
