import React from "react";

const JournalVoucher = () => {
  return (
    <div className="flex items-center justify-center h-[85vh] ml-12 p-6">
      <div className="bg-white border border-gray-300 rounded-2xl shadow-xl p-8 w-full max-w-5xl">
        {/* Header Section */}
        <div className="flex flex-wrap items-center justify-between mb-6">
          <h2 className=" text-xl font-semibold p-2 rounded-md mb-2">Journal Voucher Entry</h2>
          <button className="bg-yellow-500 text-white px-5 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition">
            Create Account Ledger
          </button>
        </div>

        {/* Form Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">Transaction Date</label>
            <input
              type="date"
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 text-lg"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Voucher No.</label>
            <input
              type="text"
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 text-lg"
              value="JV81-8200154"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Doc No.</label>
            <input
              type="text"
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 text-lg"
            />
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow">
            <thead>
              <tr className="bg-gray-100 text-lg">
                <th className="px-6 py-3 border text-left">Sr.</th>
                <th className="px-6 py-3 border text-left">Account Name</th>
                <th className="px-6 py-3 border text-left">Particulars</th>
                <th className="px-6 py-3 border text-left">Debit</th>
                <th className="px-6 py-3 border text-left">Credit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-3 border text-lg">1</td>
                <td className="px-6 py-3 border"></td>
                <td className="px-6 py-3 border"></td>
                <td className="px-6 py-3 border"></td>
                <td className="px-6 py-3 border"></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
          <div>
            <label className="block text-lg font-medium text-gray-700">Attach File</label>
            <input
              type="file"
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 text-lg"
            />
          </div>

          <div className="col-span-2 flex justify-end items-center gap-6">
            <span className="text-lg font-medium text-gray-700">Difference: </span>
            <span className="text-red-600 text-xl font-bold border-2 border-gray-400 rounded-lg px-5 py-2">
              0.00
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-8">
          <div className="flex gap-4">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md text-lg hover:bg-green-600 transition">
              Save
            </button>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md text-lg hover:bg-blue-600 transition">
              Modify
            </button>
            <button className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md text-lg hover:bg-red-600 transition">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalVoucher;
