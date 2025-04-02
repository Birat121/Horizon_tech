import React, { useState } from "react";

const StockLocationMaster = () => {
  const [locationName, setLocationName] = useState("");

  return (
    <div className="flex items-center justify-center h-[85vh]">
      {/* Outer Box */}
      <div className="w-full max-w-6xl bg-white border-2 rounded-lg shadow-lg p-8">
        {/* Form Section */}
        <div className="mb-8">
          <h2 className="text-center text-3xl font-semibold p-4 rounded-md mb-4">
            Stock Location Master
          </h2>
          <div className="flex items-center space-x-6 mb-6">
            <label className="w-40 text-gray-600 font-medium text-lg">
              Location Name:
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded w-full p-3 text-lg"
              placeholder="Enter location name"
              value={locationName}
              onChange={(e) => setLocationName(e.target.value)}
            />
          </div>
          <div className="flex space-x-6">
            <button className="flex items-center space-x-3 bg-save text-white px-6 py-3 rounded hover:bg-save-hover text-lg">
              <i className="fa fa-save"></i>
              <span>Save</span>
            </button>
            <button className="flex items-center space-x-3 bg-cancel text-white px-6 py-3 rounded hover:bg-cancel-hover text-lg">
              <i className="fa fa-undo"></i>
              <span>Cancel</span>
            </button>
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto mt-8">
          <table className="w-full border border-gray-300 text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 border text-center">Sr.</th>
                <th className="px-6 py-3 border">Location Name</th>
                <th className="px-6 py-3 border">Entry By</th>
                <th className="px-6 py-3 border">Entry Date</th>
                <th className="px-6 py-3 border text-center">Edit</th>
              </tr>
            </thead>
            <tbody>
              {/* Example Row */}
              <tr>
                <td className="px-6 py-3 border text-center">1</td>
                <td className="px-6 py-3 border">Warehouse 1</td>
                <td className="px-6 py-3 border">Admin</td>
                <td className="px-6 py-3 border">01/01/2025</td>
                <td className="px-6 py-3 border text-center">
                  <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                    Edit
                  </button>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StockLocationMaster;
