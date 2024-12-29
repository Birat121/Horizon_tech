import React, { useState } from "react";

const BalanceSheet = () => {
  const [reportType, setReportType] = useState("withOpening");
  const [detailType, setDetailType] = useState("summary");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  return (
    <div className="flex flex-col h-[90vh] bg-gray-50">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/3 bg-gray-100 p-4 border-r border-gray-300 flex flex-col">
          <h2 className="text-lg font-bold mb-4">Balance Sheet</h2>

          {/* Date Selection */}
<div className="mb-6">
  <label className="block font-medium mb-2">On Date</label>
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



          {/* Report Type Selection */}
          <div className="mb-6">
            <h3 className="text-md font-semibold mb-2">Select Report Type</h3>
            <div className="flex flex-col space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="reportType"
                  value="withOpening"
                  className="mr-2"
                  checked={reportType === "withOpening"}
                  onChange={() => setReportType("withOpening")}
                />
                With Opening
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="reportType"
                  value="balanceOnly"
                  className="mr-2"
                  checked={reportType === "balanceOnly"}
                  onChange={() => setReportType("balanceOnly")}
                />
                Balance Only
              </label>
            </div>
          </div>

          {/* Detail Type Selection */}
          <div className="mb-6">
            <h3 className="text-md font-semibold mb-2">Select Detail Type</h3>
            <div className="flex flex-col space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="detailType"
                  value="summary"
                  className="mr-2"
                  checked={detailType === "summary"}
                  onChange={() => setDetailType("summary")}
                />
                Summary
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="detailType"
                  value="inDetail"
                  className="mr-2"
                  checked={detailType === "inDetail"}
                  onChange={() => setDetailType("inDetail")}
                />
                In Detail
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-auto flex justify-between">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Preview
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              Close
            </button>
          </div>
        </div>

        {/* Report Viewer */}
        <div className="flex-1 bg-white shadow-md ml-4 rounded-md">
          <div className="h-full flex items-center justify-center text-gray-400">
            Report Viewer Placeholder
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full border-t border-gray-300 text-center text-gray-600 text-sm py-2">
        Current Page No.: 1 | Total Page No.: 10 | Zoom Factor: 100%
      </div>
    </div>
  );
};

export default BalanceSheet;
