import React, { useState } from "react";

const DayBook = () => {
  const [selectedProductType, setSelectedProductType] = useState(""); // "all" or "particulars"
  const [fromDate1, setFromDate1] = useState(""); // First "From" date
  const [toDate1, setToDate1] = useState(""); // First "To" date
  const [fromDate2, setFromDate2] = useState(""); // Second "From" date
  const [toDate2, setToDate2] = useState(""); // Second "To" date
  const [selectedUser, setSelectedUser] = useState(""); // Selected user for "particulars"
  const [gridData, setGridData] = useState([]); // Data fetched from backend
  const [isPreviewVisible, setIsPreviewVisible] = useState(false); // Toggle preview visibility

  const fetchPreviewData = async () => {
    try {
      const params = {
        fromDate1,
        toDate1,
        fromDate2,
        toDate2,
        selectedProductType,
        selectedUser,
        orderBy,
      };

      const response = await fetch("/api/preview-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch preview data");
      }

      const data = await response.json();
      setGridData(data.gridData || []); // Adjust to match the API response structure
      setIsPreviewVisible(true); // Show preview
    } catch (error) {
      console.error("Error fetching preview data:", error);
    }
  };

  return (
    <div className="flex flex-col h-[90vh] rounded-lg overflow-hidden bg-gray-50">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/3 bg-gray-100 p-4 border-r border-gray-300">
          <h1 className=" text-white text-lg font-semibold p-2 rounded-md mb-2">
            Day Book
          </h1>
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
          <div className="bg-white shadow-md rounded-md p-4">
            <label className="block font-semibold mb-2">Select Report Type Here</label>
            <label className="block">
              <input
                type="radio"
                name="reportType"
                value="all"
                className="mr-2"
                onChange={() => setSelectedProductType("all")}
                checked={selectedProductType === "all"}
              />
              Summary Only
            </label>
            <label className="block">
              <input
                type="radio"
                name="reportType"
                value="particulars"
                className="mr-2"
                onChange={() => setSelectedProductType("particulars")}
                checked={selectedProductType === "particulars"}
              />
              In Detail
            </label>
          </div>
          {/* Buttons */}
          <div className="space-y-4 mt-6">
            <button
              className="w-full flex items-center justify-center p-3 bg-preview text-white rounded hover:bg-preview-hover"
              onClick={fetchPreviewData}
            >
              <i className="fa fa-search mr-2"></i> Preview
            </button>
          </div>

          {/* Order By Section */}
          <div className="bg-white shadow-md rounded-md p-4 mt-40">
            <label className="block font-semibold mb-2">Order By:</label>
            <label className="block">
              <input
                type="radio"
                name="orderBy"
                value="name"
                className="mr-2"
                checked={true}
                readOnly
              />
              By Name
            </label>
            <label className="block">
              <input
                type="radio"
                name="orderBy"
                value="amountAsc"
                className="mr-2"
                disabled
               />
              By Amount (ASC)
            </label>
            <label className="block">
              <input
                type="radio"
                name="orderBy"
                value="amountDesc"
                className="mr-2"
                disabled
              />
              By Amount (DESC)
            </label>
          </div>

          
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white p-4 overflow-y-auto">
          {isPreviewVisible ? (
            gridData.length > 0 ? (
              <div className="text-gray-700">
                <h3 className="text-lg font-bold mb-2">Preview Data:</h3>
                <ul>
                  {gridData.map((item, index) => (
                    <li key={index}>- {item}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-gray-500 text-center">No data available.</p>
            )
          ) : (
            <p className="text-gray-500 text-center">Click 'Preview' to view data.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DayBook;