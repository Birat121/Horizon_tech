import React from "react";

const BGEntry = () => {
  return (
    <div className="p-4 h-[85vh] overflow-y-auto">
      <div className="p-6 max-w-4xl mx-auto border rounded-lg shadow-lg bg-white">
        <h1 className="text-lg font-bold p-2 rounded mb-4 text-white text-center">BG Entry</h1>

        {/* Party Info Section */}
        <div className="border p-4 rounded-md mb-4 bg-gray-100">
          <h3 className="font-semibold mb-2 text-gray-600">Party Info</h3>

          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700">
              Transaction No.
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              defaultValue="BG10081-82000001"
              readOnly
            />
          </div>

          <div className="mb-3">
            <label className="block text-sm">Transaction Date</label>
            <input type="date" className="w-full p-2 border rounded-md" />
          </div>

          <div className="mb-3">
            <label className="block text-sm">BG No.</label>
            <input type="text" className="w-full p-2 border rounded-md" />
          </div>

          <div className="mb-3">
            <label className="block text-sm">Party Name</label>
            <select className="w-full border p-2 rounded">
              <option value="">Select Party</option>
            </select>
          </div>

          <div>
            <label className="block text-sm">Remarks</label>
            <input type="text" className="w-full border p-2 rounded" />
          </div>
        </div>

        {/* Cheque Info Section */}
        <div className="border p-4 rounded-md bg-gray-100">
          <h3 className="font-semibold mb-2 text-gray-600">Cheque Info</h3>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                BG Issued Date
              </label>
              <input type="date" className="w-full border p-2 rounded" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                BG Expired Date
              </label>
              <input type="date" className="w-full border p-2 rounded" />
            </div>

            <div>
              <label className="block text-sm">Branch Name</label>
              <input type="text" className="w-full border p-2 rounded" />
            </div>

            <div>
              <label className="block text-sm">Bank Branch</label>
              <input type="text" className="w-full border p-2 rounded" />
            </div>

            <div>
              <label className="block text-sm">BG Amt. (NPR)</label>
              <input type="text" className="w-full border p-2 rounded" />
            </div>

            <div>
              <label className="block text-sm">Amount In Words</label>
              <input type="text" className="w-full border p-2 rounded" />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-2 mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Save
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded">
            Cancel
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded">
            Close
          </button>
        </div>
      </div>
    </div>
  ); 
};

export default BGEntry;
