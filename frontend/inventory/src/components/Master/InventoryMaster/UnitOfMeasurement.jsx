import React from "react";

const UnitOfMeasurement = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white border-2 border-red-500 p-6 rounded-md shadow-lg w-full max-w-md">
        <h2 className="text-lg font-bold mb-4 text-center text-blue-700">
          Create / Modify Unit Of Measurement
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">
              UOM Description:
            </label>
            <select
              className="w-full p-2 border rounded-md bg-yellow-100"
              defaultValue=""
            >
              <option value="" disabled>
                Select UOM
              </option>
              <option>Piece</option>
              <option>Box</option>
              <option>Kg</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium">UOM Quantity:</label>
            <input
              type="number"
              placeholder="Enter Quantity"
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-between">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Save
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
            Modify
          </button>
          <button className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500">
            Cancel
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default UnitOfMeasurement;
