import React, { useState } from "react";

const StockLocationMaster = () => {
  const [locationName, setLocationName] = useState("");

  return (
    <div className="flex items-center justify-center h-[85vh] ">
      {/* Outer Box */}
      <div className="w-full max-w-4xl bg-white border-2 rounded-lg shadow-lg p-6">
        {/* Form Section */}
        <div className="mb-6">
        <h2 className="  text-center text-2xl font-semibold p-2 rounded-md mb-2">
            Stock Location Master
          </h2>
          <div className="flex items-center space-x-4 mb-4">
            <label className="w-32 text-gray-600 font-medium">
              Location Name:
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded w-full p-2"
              placeholder="Enter location name"
              value={locationName}
              onChange={(e) => setLocationName(e.target.value)}
            />
          </div>
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 bg-save text-white px-4 py-2 rounded hover:bg-save-hover">
              <i className="fa fa-save"></i>
              <span>Save</span>
            </button>
            <button className="flex items-center space-x-2 bg-cancel text-white px-4 py-2 rounded hover:bg-cancel-hover">
              <i className="fa fa-undo"></i>
              <span>Cancel</span>
            </button>
            
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border">Sr.</th>
                <th className="px-4 py-2 border">Location Name</th>
                <th className="px-4 py-2 border">Entry By</th>
                <th className="px-4 py-2 border">Entry Date</th>
                <th className="px-4 py-2 border">Edit</th>
              </tr>
            </thead>
            <tbody>
              {/* Example Row */}
              <tr>
                <td className="px-4 py-2 border text-center">1</td>
                <td className="px-4 py-2 border">Warehouse 1</td>
                <td className="px-4 py-2 border">Admin</td>
                <td className="px-4 py-2 border">01/01/2025</td>
                <td className="px-4 py-2 border text-center">
                  <button className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">
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
