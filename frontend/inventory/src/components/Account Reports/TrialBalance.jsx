import React, { useState } from "react";

const TrialBalance = () => {
  const [selectedReportType1, setSelectedReportType1] = useState(""); // "summary" or "in-detail"
  const [selectedReportType2, setSelectedReportType2] = useState(""); // "withOpening" or "balanceOnly"
  const [selectedAccountType, setSelectedAccountType] = useState(""); // "allGroup" or "particular"
  const [fromDate1, setFromDate1] = useState(""); // First "From" date
  const [toDate1, setToDate1] = useState(""); // First "To" date
  const [fromDate2, setFromDate2] = useState(""); // Second "From" date
  const [toDate2, setToDate2] = useState(""); // Second "To" date
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleReportTypeChange1 = (type) => {
    setSelectedReportType1(type);
  };

  const handleReportTypeChange2 = (type) => {
    setSelectedReportType2(type);
  };

  const handleAccountTypeChange = (type) => {
    setSelectedAccountType(type);
  };

  return (
    <div className="flex flex-col h-[90vh] rounded-lg overflow-y-auto bg-gray-50">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/3 bg-gray-100 p-4 border-r border-gray-300">
          {/* Date Pickers */}
          <div className="mb-2">
            <label className="block font-semibold mb-2">On Date</label>
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
            <h3 className="text-md font-semibold mb-2">Select Date Here..</h3>
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

          {/* First Report Type Radio Group */}
          <div className="mb-4">
            <h2 className="text-lg font-bold mb-2">Select Report Type here...</h2>
            <div className="flex gap-2 flex-col">
              <label className="block">
                <input
                  type="radio"
                  name="reportType1"
                  value="summary"
                  className="mr-2"
                  onChange={() => handleReportTypeChange1("summary")}
                  checked={selectedReportType1 === "summary"}
                />
                Summary
              </label>
              <label className="block">
                <input
                  type="radio"
                  name="reportType1"
                  value="in-detail"
                  className="mr-2"
                  onChange={() => handleReportTypeChange1("in-detail")}
                  checked={selectedReportType1 === "in-detail"}
                />
                In-detail
              </label>
            </div>
          </div>

          {/* Second Report Type Radio Group */}
          <div className="mb-4">
            <h2 className="text-lg font-bold mb-2">Select Report Type here...</h2>
            <div className="flex gap-2 flex-col">
              <label className="block">
                <input
                  type="radio"
                  name="reportType2"
                  value="withOpening"
                  className="mr-2"
                  onChange={() => handleReportTypeChange2("withOpening")}
                  checked={selectedReportType2 === "withOpening"}
                />
                With Opening
              </label>
              <label className="block">
                <input
                  type="radio"
                  name="reportType2"
                  value="balanceOnly"
                  className="mr-2"
                  onChange={() => handleReportTypeChange2("balanceOnly")}
                  checked={selectedReportType2 === "balanceOnly"}
                />
                Balance Only
              </label>
            </div>
          </div>

          {/* Account Type Radio Group */}
          <div className="mb-4">
            <h2 className="text-lg font-bold mb-2">Select Account Type here...</h2>
            <label className="block">
              <input
                type="radio"
                name="accountType"
                value="allGroup"
                className="mr-2"
                onChange={() => handleAccountTypeChange("allGroup")}
                checked={selectedAccountType === "allGroup"}
              />
              All Group
            </label>
            <label className="block">
              <input
                type="radio"
                name="accountType"
                value="particular"
                className="mr-2"
                onChange={() => handleAccountTypeChange("particular")}
                checked={selectedAccountType === "particular"}
              />
              Particular
            </label>
          </div>

          {/* Dropdown for Particulars Category */}
          {selectedAccountType === "particular" && (
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

export default TrialBalance;
