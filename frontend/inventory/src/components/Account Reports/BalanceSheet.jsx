import React, { useState } from "react";

const BalanceSheet = () => {
  const [reportType, setReportType] = useState("withOpening");
  const [detailType, setDetailType] = useState("summary");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  return (
    <div className="flex flex-col h-[85vh] bg-white border-2 rounded-lg shadow-lg overflow-y-auto ml-8 ">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/3 bg-gray-100 p-4 border-r border-gray-300 flex flex-col">
        <h1 className=" text-white text-lg font-semibold p-2 rounded-md mb-2">
          Balance Sheet
        </h1>
          {/* Date Selection */}
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <label className="block font-medium mb-2">On Date</label>
            <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
              <input
                type="date"
                className="p-2 border border-gray-300 rounded w-full "
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
              <input
                type="date"
                className="p-2 border border-gray-300 rounded w-full "
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </div>
          </div>

          {/* Report Type Selection */}
          <div className="bg-white shadow-md rounded-md p-4 mt-32 mb-4">
            <h3 className="text-md font-semibold mb-2">Select Report Type Here</h3>
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
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <label className="block font-medium mb-2">Select Report Type Here</label>
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
          <div className="mt-auto flex justify-end">
            <button className="px-4 py-2 bg-preview text-white rounded hover:bg-preview-hover">
              Preview
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
    </div>
  );
};

export default BalanceSheet;
