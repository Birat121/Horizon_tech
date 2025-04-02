import React from "react";

const BGEntry = () => {
  return (
    <div className="p-6 h-[90vh] overflow-y-auto">
      <div className="p-2 max-w-7xl mx-auto border rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-bold p-4 rounded mb-4 text-center">BG Entry</h2>

        {/* Party Info Section */}
        <div className="border p-6 rounded-md mb-6 ">
          <h3 className="font-semibold mb-3 text-gray-600 text-lg">Party Info</h3>

          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Transaction No.</label>
              <input type="text" className="w-full p-2 border rounded-md" defaultValue="BG10081-82000001" readOnly />
            </div>

            <div>
              <label className="block text-sm">Transaction Date</label>
              <input type="date" className="w-full p-2 border rounded-md" />
            </div>

            <div>
              <label className="block text-sm">BG No.</label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>

            <div>
              <label className="block text-sm">Party Name</label>
              <select className="w-full border p-2 rounded">
                <option value="">Select Party</option>
              </select>
            </div>

            <div className="col-span-2">
              <label className="block text-sm">Remarks</label>
              <input type="text" className="w-full border p-2 rounded" />
            </div>
          </div>
        </div>

        {/* Cheque Info Section */}
        <div className="border p-6 rounded-md  mb-6">
          <h3 className="font-semibold mb-3 text-gray-600 text-lg">Cheque Info</h3>

          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">BG Issued Date</label>
              <input type="date" className="w-full border p-2 rounded" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">BG Expired Date</label>
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
        <div className="flex justify-end gap-3 mt-4">
          <button className="bg-blue-500 text-white px-6 py-2 rounded">Save</button>
          <button className="bg-gray-500 text-white px-6 py-2 rounded">Cancel</button>
          <button className="bg-red-500 text-white px-6 py-2 rounded">Close</button>
        </div>
      </div>
    </div>
  );
};

export default BGEntry;

