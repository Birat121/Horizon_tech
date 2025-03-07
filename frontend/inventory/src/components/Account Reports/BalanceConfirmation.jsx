import React, { useState, useEffect } from "react";

const BalanceConfirmation = () => {
  const [vendors, setVendors] = useState([]); // List of vendors/customers fetched from the backend
  const [selectedVendor, setSelectedVendor] = useState(""); // Selected vendor/customer
  const [loading, setLoading] = useState(true); // Loading state for fetching data
  const [error, setError] = useState(null); // Error state for handling fetch issues

  // Simulate fetching vendors/customers from the backend
  useEffect(() => {
    // Replace with actual API call
    setTimeout(() => {
      setVendors(["Vendor 1", "Vendor 2", "Customer 1", "Customer 2"]);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="flex flex-col h-[85vh] bg-white border-2 rounded-lg shadow-lg overflow-hidden ml-8">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-100 p-4 border-r border-gray-300">
          <h1 className=" text-white text-lg font-semibold p-2 rounded-md mb-2">
            Balance Confirmation (Debitors / Creditors)
          </h1>

          {/* Label */}
          <div className="bg-white shadow-md rounded-md p-4 mb-4 mt-4">
            <label className="block font-semibold mb-2">
              Select Vendor/Customer
            </label>

            {/* Dropdown */}
            <div className="mb-2">
              <select
                className="w-full p-2 border border-gray-400 rounded mb-2"
                value={selectedVendor}
                onChange={(e) => setSelectedVendor(e.target.value)}
              >
                <option value="">-- Select Vendor/Customer --</option>
                {vendors.map((vendor, index) => (
                  <option key={index} value={vendor}>
                    {vendor}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-4 mt-6">
            <button
              className="w-full flex items-center justify-center p-3 bg-preview text-white rounded hover:bg-preview-hover"
              onClick={() => alert(`Preview for ${selectedVendor || "None"}`)}
              disabled={!selectedVendor}
            >
              <i className="fa fa-search mr-2"></i> Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceConfirmation;
