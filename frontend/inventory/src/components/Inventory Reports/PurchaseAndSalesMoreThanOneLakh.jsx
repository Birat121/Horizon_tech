import React, { useState } from "react";

const PurchaseAndSalesMoreThanOneLakh = () => {
  const [selectedReportType, setSelectedReportType] = useState(""); 
  const [selectedDateType1, setSelectedDateType1] = useState(""); 
  const [selectedDateType2, setSelectedDateType2] = useState(""); 
 

  const handleReportTypeChange = (type) => {
    setSelectedReportType(type);
  };

  const handleDateTypeChange1 = (type) => {
    setSelectedDateType1(type);
  };

  const handleDateTypeChange2 = (type) => {
    setSelectedDateType2(type);
  };

  return (
    <div className="flex flex-col h-[90vh] rounded-lg overflow-y-auto bg-gray-50">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/3 bg-gray-100 p-4 border-r border-gray-300">
          

          {/* First Report Type Radio Group */}
          <div className="mb-4">
            <h2 className="text-lg font-bold mb-2">Select Report Type here...</h2>
            <div className="flex gap-2 flex-col">
              <label className="block">
                <input
                  type="radio"
                  name="reportType"
                  value="purchase"
                  className="mr-2"
                  onChange={() => handleReportTypeChange("purchase")}
                  checked={selectedReportType === "purchase"}
                />
                Summary
              </label>
              <label className="block">
                <input
                  type="radio"
                  name="reportType"
                  value="sales"
                  className="mr-2"
                  onChange={() => handleReportTypeChange("sales")}
                  checked={selectedReportType === "sales"}
                />
                In-detail
              </label>
            </div>
          </div>

          {/* Second Report Type Radio Group */}
          <div className="mb-10">
            <h2 className="text-lg font-bold mb-2">Select Date Type here...</h2>
            <div className="flex gap-2 flex-col">
              <label className="block">
                <input
                  type="radio"
                  name="dateType1"
                  value="withinFiscalYear"
                  className="mr-2"
                  onChange={() => handleDateTypeChange1("withinFiscalYear")}
                  checked={selectedDateType1 === "withinFiscalYear"}
                />
                Within Fiscal Year
              </label>
              <label className="block">
                <input
                  type="radio"
                  name="dateType1"
                  value="selectedMonth"
                  className="mr-2"
                  onChange={() => handleDateTypeChange1("selectedMonth")}
                  checked={selectedDateType1 === "selectedMonth"}
                />
                Selected Month
              </label>
            </div>
          </div>

          {/* Dropdown for Particulars Category */}
          {selectedDateType1 === "selectedMonth" && (
            <div className="mb-4">
              <select className="w-full p-2 border border-gray-400 rounded mb-2">
                <option>Select Category</option>
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
              </select>
            </div>
          )}


          {/* Account Type Radio Group */}
          <div className="mb-4">
            <h2 className="text-lg font-bold mb-4">Select Date Type here...</h2>
            <label className="block">
              <input
                type="radio"
                name="dateType2"
                value="monthwise"
                className="mr-2"
                onChange={() => handleDateTypeChange2("monthwise")}
                checked={selectedDateType2 === "monthwise"}
              />
              Month Wise
            </label>
            <label className="block">
              <input
                type="radio"
                name="dateType2"
                value="withinFiscalYear"
                className="mr-2"
                onChange={() => handleDateTypeChange2("withinFiscalYear")}
                checked={selectedDateType2 === "withinFiscalYear"}
              />
              Within Fiscal Year
            </label>
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

export default PurchaseAndSalesMoreThanOneLakh;
