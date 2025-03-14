import React, { useState } from "react";
import Button from "../../reusable inputs/buttons";

const NoSalesFromLastPurchase = () => {
  const [fromDate1, setFromDate1] = useState(""); // First "From" date
  const [toDate1, setToDate1] = useState(""); // First "To" date
  const [fromDate2, setFromDate2] = useState(""); // Second "From" date
  const [toDate2, setToDate2] = useState(""); // Second "To" date
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [selectedPurchaseDateType, setSelectedPurchaseDateType] = useState("");

  const handlePurchaseDateChange = (type) => {
    setSelectedPurchaseDateType(type);
  };

  return (
    <div className="flex flex-col h-[85vh] bg-white border-2 rounded-lg shadow-lg overflow-y-auto ml-14">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/3 bg-gray-100 p-4 border-r border-gray-300">
          <h1 className=" text-white text-lg font-semibold p-2 rounded-md mb-2">
            No Purchase From Last Purchase
          </h1>
          {/* Date Pickers */}
          <div className="bg-white shadow-md rounded-b-md p-4 mb-4">
            <label className="block font-semibold mb-2">As On Date</label>
            <label className="flex items-center">
              <input
                type="radio"
                name="purchaseDate"
                value="tillPurchaseDate"
                className="mr-2"
                onChange={() => handlePurchaseDateChange("tillPurchaseDate")}
                checked={selectedPurchaseDateType === "tillPurchaseDate"}
              />
              Till Date Purchase
            </label>
            <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
              <input
                type="date"
                className="border p-2 w-full"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                disabled={selectedPurchaseDateType !== "tillPurchaseDate"}
              />
              <input
                type="date"
                className="border p-2 w-full"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                disabled={selectedPurchaseDateType !== "tillPurchaseDate"}
              />
            </div>
          </div>

          {/* First Date Picker */}
          <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h3 className="text-md font-semibold mb-2">
              Select Purchase Date Here..
            </h3>
            <label>
              <input
                type="radio"
                name="purchaseDate"
                value="dateRange"
                className="mr-2"
                onChange={() => handlePurchaseDateChange("dateRange")}
                checked={selectedPurchaseDateType === "dateRange"}
              />
              Date Range
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="font-medium mb-1">From:</label>
                <input
                  type="date"
                  className="border p-2 rounded w-full"
                  value={fromDate1}
                  onChange={(e) => setFromDate1(e.target.value)}
                  disabled={selectedPurchaseDateType !== "dateRange"}
                />
              </div>
              <div className="flex flex-col">
                <label className="font-medium mb-1">To:</label>
                <input
                  type="date"
                  className="border p-2 rounded w-full"
                  value={toDate1}
                  onChange={(e) => setToDate1(e.target.value)}
                  disabled={selectedPurchaseDateType !== "dateRange"}
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
                  disabled={selectedPurchaseDateType !== "dateRange"}
                />
              </div>
              <div className="flex flex-col">
                <label className="font-medium mb-1">To:</label>
                <input
                  type="date"
                  className="border p-2 rounded w-full"
                  value={toDate2}
                  onChange={(e) => setToDate2(e.target.value)}
                  disabled={selectedPurchaseDateType !== "dateRange"}
                />
              </div>
            </div>
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

export default NoSalesFromLastPurchase;
