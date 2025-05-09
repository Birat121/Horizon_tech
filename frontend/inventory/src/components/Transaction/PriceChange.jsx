import React from "react";

const PriceChange = () => {
  return (
    <div className="w-full h-[85vh] flex justify-center items-center pt-4"> {/* Centering the content */}
      <div className="w-full max-w-7xl bg-gray-300 p-4 rounded"> {/* Container width */}
        {/* File Upload Section */}
        <div className="flex items-center mb-4 space-x-2">
          <span className="text-purple-800 font-semibold text-sm">Excel File</span>
          <input
            type="text"
            className="flex-grow p-1 border border-gray-300 rounded text-sm"
          />
          <button className="bg-gray-200 border border-gray-300 rounded px-3 py-1 text-sm">
            Import...
          </button>
        </div>

        {/* Table */}
        <div className="mt-4 overflow-x-auto"> {/* Allow horizontal scrolling */}
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gradient-to-r from-green-400 to-blue-500 text-white">
              <tr>
                {["Sr.", "Product Id", "Product Name", "Available Stock", "Old Price", "New Price", "Discount", "Category", "Supplier", "Location"].map((title, idx) => (
                  <th key={idx} className="border px-4 py-2 text-left">{title}</th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                {Array(10).fill("").map((_, i) => (
                  <td key={i} className="border px-4 py-2 text-center">{i === 0 ? "1" : ""}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Security Verification */}
        <div className="mt-5 bg-white p-4 rounded shadow-md w-72 mx-auto">
          <h2 className="text-center text-base font-semibold mb-3">Security Verification</h2>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-1 border border-gray-300 rounded text-sm"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-1 border border-gray-300 rounded text-sm"
            />
            <div className="text-center">
              <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-sm font-medium py-1 px-4 rounded-full">
                Export &raquo;
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-between px-2">
          <button className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white text-sm font-medium py-1 px-4 rounded-full">
            Save
          </button>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium py-1 px-4 rounded-full">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceChange;

