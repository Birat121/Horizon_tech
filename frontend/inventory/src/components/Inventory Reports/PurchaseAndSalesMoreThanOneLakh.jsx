import React, { useState } from "react";
import Button from "../../reusable inputs/buttons";

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
    <div className="flex flex-col h-[85vh] bg-white border-2 rounded-lg shadow-lg overflow-y-auto ml-14">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/3 bg-gray-100 p-4 border-r border-gray-300">
        <h1 className=" text-white text-lg font-semibold p-2 rounded-md mb-2">
            Purchase And Sales More Than One Lakh
          </h1>
          

          {/* First Report Type Radio Group */}
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
          <label className="block font-semibold mb-2">Select Report Type Here</label>
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
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
          <label className="block font-semibold mb-2">Select Date Type Here</label>
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
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
          <label className="block font-semibold mb-2">Select Date Type Here</label>
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
          <div className="space-y-4 mt-10 flex justify-center">
             <Button type="preview"> Preview </Button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseAndSalesMoreThanOneLakh;
