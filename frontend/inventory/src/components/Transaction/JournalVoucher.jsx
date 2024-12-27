import React from "react";

const JournalVoucher = () => {
  return (
    <div className="flex items-center justify-center min-h-screen  p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        {/* Header Section */}
        <div className="flex flex-wrap items-center justify-between mb-4">
          <h1 className="text-xl font-bold">Journal Voucher Entry</h1>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
            Create Account Ledger
          </button>
        </div>

        {/* Form Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium">Transaction Date</label>
            <input
              type="date"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Voucher No.</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              value="JV81-8200154"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Doc No.</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border text-left">Sr.</th>
                <th className="px-4 py-2 border text-left">Account Name</th>
                <th className="px-4 py-2 border text-left">Particulars</th>
                <th className="px-4 py-2 border text-left">Debit</th>
                <th className="px-4 py-2 border text-left">Credit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">1</td>
                <td className="px-4 py-2 border"></td>
                <td className="px-4 py-2 border"></td>
                <td className="px-4 py-2 border"></td>
                <td className="px-4 py-2 border"></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
        <div>
  <label className="block text-sm font-medium">File</label>
  <input
    type="file"
    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
  />
</div>

          <div className="col-span-2 flex justify-end items-center gap-4">
            <span className="text-sm font-medium">Difference: </span>
            <span className="text-red-600 text-lg font-bold rounded-md border-solid border-2 border-slate-500 w-20 text-center">0.00</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-6">
          <div className="flex gap-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Save
            </button>
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
              Modify
            </button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
              Cancel
            </button>
          </div>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default JournalVoucher;
