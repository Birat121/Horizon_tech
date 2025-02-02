import React, { useState } from "react";

const InvoiceWiseAgeingAnalysis = () => {
  const [selectedProductType, setSelectedProductType] = useState(""); // "all" or "particulars"
  const [fromDate1, setFromDate1] = useState(""); // First "From" date
  const [toDate1, setToDate1] = useState(""); // First "To" date
  const [fromDate2, setFromDate2] = useState(""); // Second "From" date
  const [toDate2, setToDate2] = useState(""); // Second "To" date
  const [gridData, setGridData] = useState([]); // State to hold grid data
  const [isGridVisible, setIsGridVisible] = useState(false); // Toggle grid visibility
  const [isPreviewVisible, setIsPreviewVisible] = useState(false); // Toggle preview visibility

  const handleProductTypeChange = (type) => {
    setSelectedProductType(type);
  };

  const fetchGridData = async () => {
    try {
      const response = await fetch("/api/invoice-data"); // Replace with actual backend API endpoint
      const data = await response.json();
      setGridData(data);
      setIsGridVisible(true);
      setIsPreviewVisible(false); // Hide preview if grid is displayed
    } catch (error) {
      console.error("Error fetching grid data:", error);
    }
  };

  const fetchPreviewData = async () => {
    try {
      const response = await fetch("/api/preview-data"); // Replace with actual backend API endpoint
      const data = await response.json();
      setGridData(data);
      setIsPreviewVisible(true);
      setIsGridVisible(false); // Hide grid if preview is displayed
    } catch (error) {
      console.error("Error fetching preview data:", error);
    }
  };

  return (
    <div className="flex flex-col h-[90vh] rounded-lg overflow-hidden bg-gray-50">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/3 bg-gray-100 p-4 border-r border-gray-300">
        <div className="bg-green-600 text-white text-lg font-semibold p-2 rounded-md mb-2">Invoice Ageing Report</div>
          {/* Select Date Section */}
          <div className="bg-white shadow-md rounded-md p-4">
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
          <div className="bg-white shadow-md rounded-md p-4 mt-4">
            <label className="block font-semibold mb-2">Select Vendor / Customer Here</label>
            <label className="block">
              <input
                type="radio"
                name="productType"
                value="particulars"
                className="mr-2"
                onChange={() => handleProductTypeChange("particulars")}
                checked={selectedProductType === "particulars"}
              />
              Ledger Name 
            </label>

          {/* Dropdown for Particulars Category */}
          {selectedProductType === "particulars" && (
            <div className="mb-4 mt-4">
              <select className="w-full p-2 border border-gray-400 rounded mb-2">
                <option>Select Category</option>
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
              </select>
            </div>
          )}
          </div>

          {/* Buttons */}
          <div className="space-y-4 mt-6">
            <button
              className="w-full flex items-center justify-center p-3 bg-save text-white rounded hover:bg-save-hover"
              onClick={fetchGridData}
            >
              <i className="fa fa-th mr-2"></i> On Grid
            </button>
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
          {isGridVisible && gridData.length > 0 ? (
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2">Column 1</th>
                  <th className="border border-gray-300 p-2">Column 2</th>
                  <th className="border border-gray-300 p-2">Column 3</th>
                </tr>
              </thead>
              <tbody>
                {gridData.map((row, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 p-2">
                      {row.column1}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {row.column2}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {row.column3}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : isPreviewVisible && gridData.length > 0 ? (
            <div className="text-gray-700">
              <h3 className="text-lg font-bold mb-2">Preview Data:</h3>
              <ul>
                {gridData.map((item, index) => (
                  <li key={index}>- {item.column1}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-gray-500 text-center">
              {isGridVisible || isPreviewVisible
                ? "No data available."
                : "Click 'On Grid' or 'Preview' to view data."}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InvoiceWiseAgeingAnalysis;
