import React from "react";

function ReceiptVoucher() {
  return (
    <div className="flex items-center justify-center h-[85vh] ml-14 p-6">
      <div className="max-w-5xl w-full mx-auto bg-white border border-gray-300 rounded-2xl shadow-xl p-8">
        {/* Title Section */}
        <div className="text-center mb-6">
          <h1 className="text-white text-lg font-semibold p-2 rounded-md mb-2">Receipt Voucher</h1>
        </div>

        {/* Form Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">Date of Receipt</label>
            <input
              type="date"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Voucher No</label>
            <select className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg">
              <option value="RV81-820001">RV81-820001</option>
              <option value="RV81-820002">RV81-820002</option>
              <option value="RV81-820003">RV81-820003</option>
              <option value="RV81-820004">RV81-820004</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">DOC No</label>
            <select className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg">
              <option value="DOC001">DOC001</option>
              <option value="DOC002">DOC002</option>
              <option value="DOC003">DOC003</option>
              <option value="DOC004">DOC004</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Contra Account</label>
            <select className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg">
              <option>Select</option>
            </select>
          </div>
          <div className="col-span-2">
            <label className="block text-lg font-medium text-gray-700">Remarks</label>
            <input
              type="text"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
            />
          </div>
        </div>

        {/* Table Section */}
        <div className="mt-8 overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg shadow">
            <thead className="bg-gray-100 text-lg">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left">Sr.</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Account Name</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Amount</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Narration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 text-lg text-center">1</td>
                <td className="border border-gray-300 px-4 py-3 text-lg"></td>
                <td className="border border-gray-300 px-4 py-3 text-lg"></td>
                <td className="border border-gray-300 px-4 py-3 text-lg"></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer Section */}
        <div className="mt-6 flex justify-between items-center">
          <div>
            <label className="text-lg font-medium text-gray-700">Grand Total:</label>
            <span className="ml-4 text-xl font-semibold border border-gray-400 px-6 py-3 rounded-lg">
              0.00
            </span>
          </div>
          <div className="flex gap-4">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md text-lg hover:bg-green-600 transition">
              Save
            </button>
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md text-lg hover:bg-yellow-600 transition">
              Modify
            </button>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md text-lg hover:bg-blue-600 transition">
              Print
            </button>
            <button className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md text-lg hover:bg-red-600 transition">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReceiptVoucher;
