import React from "react";

const PDCEntry = () => {
  return (
    <div className="p-4  min-h-screen overflow-y-auto">
      <div className="bg-white border-2 rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <h1 className=" text-white text-lg font-semibold p-2 text-center rounded-md mb-2">
            PDC Entry
          </h1>
        
        {/* Party Info Section */}
        <div className="border p-4 rounded-lg mb-4">
          <h3 className="font-semibold mb-2">Party Info...</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm">Transaction No.</label>
              <input type="text" className="w-full border p-2 rounded" value="PDC10081-82000001" readOnly />
            </div>
            <div>
              <label className="block text-sm">Voucher Type</label>
              <select className="w-full border p-2 rounded">
                <option>Advance Cheque</option>
              </select>
            </div>
            <div>
              <label className="block text-sm">Reference No.</label>
              <input type="text" className="w-full border p-2 rounded" placeholder="No Reference" />
            </div>
            <div>
              <label className="block text-sm">Transaction Date</label>
              <input type="date" className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block text-sm">Party Name</label>
              <input type="text" className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block text-sm">Remarks</label>
              <input type="text" className="w-full border p-2 rounded" />
            </div>
          </div>
        </div>
        
        {/* Advance Cheque Section */}
        <div className="border p-4 rounded-lg mb-4">
          <h3 className="font-semibold mb-2">Advance Cheque</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm">Cheque No.</label>
              <input type="text" className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block text-sm">Cheque Date</label>
              <input type="date" className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block text-sm">Bank Name</label>
              <input type="text" className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block text-sm">Cheque Amount</label>
              <input type="text" className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block text-sm">Account No.</label>
              <input type="text" className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block text-sm">Beneficiary Name</label>
              <input type="text" className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block text-sm">Deposit Bank Name</label>
              <input type="text" className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block text-sm">Cheque Type</label>
              <input type="text" className="w-full border p-2 rounded"  />
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex justify-end gap-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded">Close</button>
        </div>
      </div>
    </div>
  );
};

export default PDCEntry;
