import React, { useState, useEffect } from "react";

const ProductionConsumptionReport = () => {
  const [selectedVendorType, setSelectedVendorType] = useState(""); // Tracks selected report type
  const [selectedPurchaseDateType, setSelectedPurchaseDateType] = useState(""); // Tracks selected purchase date type
  const [dropdownData, setDropdownData] = useState([]); // State for dropdown options
  const [selectedOption, setSelectedOption] = useState(""); // State for selected dropdown option
  const [selectedDate, setSelectedDate] = useState("");
  const [fromDate1, setFromDate1] = useState(""); // First "From" date
  const [toDate1, setToDate1] = useState(""); // First "To" date
  const [fromDate2, setFromDate2] = useState(""); // Second "From" date
  const [toDate2, setToDate2] = useState(""); // Second "To" date
  const [loading, setLoading] = useState(false); // Loading state for dropdown

  useEffect(() => {
    // Fetch data for dropdown from backend
    const fetchDropdownData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://your-backend-endpoint/api/getDropdownData"
        ); // Replace with your backend API
        if (!response.ok) {
          throw new Error("Failed to fetch dropdown data");
        }
        const data = await response.json();
        setDropdownData(data); // Assuming backend response is an array
      } catch (error) {
        console.error("Error fetching dropdown data:", error);
      } finally {
        setLoading(false);
      }
    };

    // Fetch data only if "Particulars Category" is selected
    if (
      selectedPurchaseDateType === "particulars" ||
      selectedPurchaseDateType === "particularProduct"
    ) {
      fetchDropdownData();
    }
  }, [selectedPurchaseDateType]);

  const handleVendorTypeChange = (type) => {
    setSelectedVendorType(type);
  };

  const handlePurchaseDateChange = (type) => {
    setSelectedPurchaseDateType(type);
  };

  return (
    <div className="flex flex-col h-[85vh] bg-white border-2 rounded-lg shadow-lg overflow-y-auto ml-14">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/3 bg-gray-100 p-4 border-r  border-gray-300">
        <h1 className=" text-white text-lg font-semibold p-2 rounded-md mb-2">
            Production / Consumption Report
          </h1>
          {/* Select Report Type */}
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <label className="block font-semibold mb-4">
              Select Report Type
            </label>
            <div className="space-y-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="reportType"
                  value="productionSummary"
                  className="mr-2"
                  checked={selectedVendorType === "production"}
                  onChange={() => handleVendorTypeChange("production")}
                />
                Production Summary Only
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="reportType"
                  value="productionConsumption"
                  className="mr-2"
                  checked={selectedVendorType === "consumption"}
                  onChange={() => handleVendorTypeChange("consumption")}
                />
                Production With Consumption
              </label>
            </div>
          </div>

          {/* Select Product Type */}
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <label className="block font-semibold mb-4">
              Select Product Type
            </label>
            <div className="space-y-4">
              <label className="flex items-center space-x-14">
                <input
                  type="radio"
                  name="productType"
                  value="all"
                  className="mr-2"
                  checked={selectedPurchaseDateType === "all"}
                  onChange={() => handlePurchaseDateChange("all")}
                />
                All Category
                <input
                  type="radio"
                  name="productType"
                  value="particulars"
                  className="mr-2"
                  checked={selectedPurchaseDateType === "particulars"}
                  onChange={() => handlePurchaseDateChange("particulars")}
                />
                Particulars Category
              </label>
              <div className="mb-6">
                <select
                  className="w-full p-2 border border-gray-300 rounded"
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  disabled={selectedPurchaseDateType !== "particulars"}
                >
                  <option value="" disabled>
                    -- Select an Option --
                  </option>
                  {dropdownData.map((item, index) => (
                    <option key={index} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>

              <label className="flex items-center">
                <input
                  type="radio"
                  name="productType"
                  value="particularProduct"
                  className="mr-2"
                  checked={selectedPurchaseDateType === "particularProduct"}
                  onChange={() => handlePurchaseDateChange("particularProduct")}
                />
                Particular Product
              </label>
            </div>
            {/* Dropdown fetched from backend */}
            <div className="mb-6">
              <select
                className="w-full p-2 border border-gray-300 rounded"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                disabled={selectedPurchaseDateType !== "particularProduct"}
              >
                <option value="" disabled>
                  -- Select an Option --
                </option>
                {dropdownData.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Date Picker */}
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <label className="block font-semibold mb-4">On Date</label>
            <label className="flex items-center">
              <input
                type="radio"
                name="reportDate"
                value="reportDate"
                className="mr-2"
                onChange={() => handlePurchaseDateChange("reportDate")}
                checked={selectedPurchaseDateType === "reportDate"}
              />
              Report On Date
            </label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              disabled={selectedPurchaseDateType !== "reportDate"}
            />
          </div>
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <label className="block font-semibold mb-4">
              Selected Date Here
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="selectedDate"
                value="selectedDate"
                className="mr-2"
                onChange={() => handlePurchaseDateChange("selectedDate")}
                checked={selectedPurchaseDateType === "selectedDate"}
              />
              Selected Date
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="font-medium mb-1">From:</label>
                <input
                  type="date"
                  className="border p-2 rounded w-full"
                  value={fromDate1}
                  onChange={(e) => setFromDate1(e.target.value)}
                  disabled={selectedPurchaseDateType !== "selectedDate"} // Fixed condition
                />
                <label className="font-medium mb-1">From:</label>
                <input
                  type="date"
                  className="border p-2 rounded w-full"
                  value={fromDate2}
                  onChange={(e) => setFromDate2(e.target.value)}
                  disabled={selectedPurchaseDateType !== "selectedDate"} // Fixed condition
                />
              </div>
              <div className="flex flex-col">
                <label className="font-medium mb-1">To:</label>
                <input
                  type="date"
                  className="border p-2 rounded w-full"
                  value={toDate1}
                  onChange={(e) => setToDate1(e.target.value)}
                  disabled={selectedPurchaseDateType !== "selectedDate"} // Fixed condition
                />
                <label className="font-medium mb-1">To:</label>
                <input
                  type="date"
                  className="border p-2 rounded w-full"
                  value={toDate2}
                  onChange={(e) => setToDate2(e.target.value)}
                  disabled={selectedPurchaseDateType !== "selectedDate"} // Fixed condition
                />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button className="w-full flex items-center justify-center p-3 bg-preview text-white rounded hover:bg-preview-hover">
              <i className="fa fa-search mr-2"></i> Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductionConsumptionReport;
