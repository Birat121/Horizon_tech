import React, { useState } from "react";

const DebitorAccountMaster = () => {
  const [debitorName, setDebitorName] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Outer Box */}
      <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-6 border border-gray-300">
        {/* Title Section */}
        <h1 className="text-blue-700 font-bold text-lg mb-4">
          Debitor A/C Master For SPL Sales Discount
        </h1>

        {/* Form Section */}
        <div className="mb-6">
          <div className="flex items-center space-x-4 mb-4">
            <label className="w-40 font-medium text-gray-700">
              Debitors Name:
            </label>
            <select
              className="border border-gray-400 rounded w-full p-2 bg-yellow-200 focus:outline-none"
              value={debitorName}
              onChange={(e) => setDebitorName(e.target.value)}
            >
              <option value="" disabled>
                Select debitor
              </option>
              <option value="Debitor 1">Debitor 1</option>
              <option value="Debitor 2">Debitor 2</option>
              <option value="Debitor 3">Debitor 3</option>
            </select>
          </div>
        </div>

        {/* Button Section */}
        <div className="flex justify-around">
          <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            <i className="fa fa-save"></i>
            <span>Save</span>
          </button>
          <button className="flex items-center space-x-2 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
            <i className="fa fa-edit"></i>
            <span>Modify</span>
          </button>
          <button className="flex items-center space-x-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
            <i className="fa fa-undo"></i>
            <span>Cancel</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DebitorAccountMaster;
