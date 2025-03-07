import React, { useState } from "react";

const UserBaseCollection = () => {
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
      // Construct the request parameters
      const params = {
        fromDate1,
        toDate1,
        fromDate2,
        toDate2,
        selectedProductType,
        selectedUser,
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
      setGridData(data); // Update the data state
      setIsPreviewVisible(true); // Show preview
    } catch (error) {
      console.error("Error fetching preview data:", error);
    }
  };

  return (
    <div className="flex flex-col h-[85vh] bg-white border-2 rounded-lg shadow-lg overflow-y-auto ml-8">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/3 bg-gray-100 p-4 border-r border-gray-300">
        <h1 className=" text-white text-lg font-semibold p-2 rounded-md mb-4">User Base Collection</h1>
          {/* Select Date Section */}
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <label className="block font-semibold mb-2">Select Date Range Here</label>
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
            <label className="block font-semibold mb-2">Select Report Type Here</label>
            <label className="block">
              <input
                type="radio"
                name="productType"
                value="all"
                className="mr-2"
                onChange={() => setSelectedProductType("all")}
                checked={selectedProductType === "all"}
              />
              All Users
            </label>
            <label className="block">
              <input
                type="radio"
                name="productType"
                value="particulars"
                className="mr-2"
                onChange={() => setSelectedProductType("particulars")}
                checked={selectedProductType === "particulars"}
              />
              Particular Users
            </label>
          {/* Dropdown menu */}
          {selectedProductType === "particulars" && (
            <div className="mb-2 mt-4">
              <select
                className="border p-2 rounded w-full"
                value={selectedUser}
                onChange={(e) => setSelectedUser(e.target.value)}
              >
                <option value="">Select User</option>
                <option value="user1">User 1</option>
                <option value="user2">User 2</option>
                <option value="user3">User 3</option>
              </select>
            </div>
          )}
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
            <p className="text-gray-500 text-center">
              Click 'Preview' to view data.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserBaseCollection;
