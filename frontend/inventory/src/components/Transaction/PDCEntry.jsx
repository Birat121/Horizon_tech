import React, { useState } from "react";

const PDCEntry = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleButtonClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="min-h-screen  flex flex-col justify-center items-center p-10">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
        {/* Buttons */}
        <div className="flex justify-between mb-6">
          <button
            onClick={() => handleButtonClick("pdcEntry")}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
          >
            PDC Entry
          </button>
          <button
            onClick={() => handleButtonClick("pdcReport")}
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all"
          >
            PDC Report
          </button>
        </div>

        {/* Conditional Menu Render */}
        {activeMenu === "pdcEntry" && (
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="border border-gray-300 p-4 rounded mb-4">
              <label className="block font-semibold mb-2">Party Info</label>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center space-x-4">
                  <label className="font-medium">Transaction No</label>
                  <input
                    type="text"
                    className="w-1/3 p-2 border border-gray-300 rounded"
                  />
                  <label className="font-medium">Voucher Type</label>
                  <select
                    className="w-1/3 p-2 border border-gray-300 rounded"
                    name=""
                    id=""
                  >
                    <option value="">Select</option>
                    <option value="PDC">PDC</option>
                  </select>
                </div>
                <div className="flex items-center space-x-4">
                  <label className="font-medium">Reference No</label>
                  <input
                    type="text"
                    className="w-1/3 p-2 border border-gray-300 rounded"
                  />

                  <label className="font-medium">Transaction Date</label>
                  <input
                    type="date"
                    className="w-1/3 p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {activeMenu === "pdcReport" && (
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              PDC Report Menu
            </h3>
            <p className="text-gray-600">
              Here you can view and generate PDC reports.
            </p>
            {/* Add more content specific to PDC Report */}
          </div>
        )}
      </div>
    </div>
  );
};

export default PDCEntry;
