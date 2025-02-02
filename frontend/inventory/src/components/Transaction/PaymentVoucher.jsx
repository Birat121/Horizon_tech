import React from "react";

function PaymentVoucher() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-5xl w-full mx-auto bg-white shadow-md p-6 rounded">
        {/* Title Section */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-blue-600">Payment Voucher</h1>
        </div>

        {/* Form Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block font-semibold">Date of Receipt:</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded px-2 py-1"
            />
          </div>
          <div>
            <label className="block font-semibold">Voucher No:</label>
            <select className="w-full border border-gray-300 rounded px-2 py-1">
              <option value="RV81-820001">RV81-820001</option>
              <option value="RV81-820002">RV81-820002</option>
              <option value="RV81-820003">RV81-820003</option>
              <option value="RV81-820004">RV81-820004</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div>
            <label className="block font-semibold">DOC No:</label>
            <select className="w-full border border-gray-300 rounded px-2 py-1">
              <option value="DOC001">DOC001</option>
              <option value="DOC002">DOC002</option>
              <option value="DOC003">DOC003</option>
              <option value="DOC004">DOC004</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div>
            <label className="block font-semibold">Contra Account:</label>
            <select className="w-full border border-gray-300 rounded px-2 py-1">
              <option>Select</option>
            </select>
          </div>
          <div className="col-span-2">
            <label className="block font-semibold">Remarks:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-2 py-1"
            />
          </div>
        </div>

        {/* Table Section */}
        <div className="mt-8">
          <table className="w-full border border-gray-300">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="border border-gray-300 px-2 py-1">Sr.</th>
                <th className="border border-gray-300 px-2 py-1">
                  Account Name
                </th>
                <th className="border border-gray-300 px-2 py-1">Amount</th>
                <th className="border border-gray-300 px-2 py-1">Narration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-2 py-1 text-center">
                  1
                </td>
                <td className="border border-gray-300 px-2 py-1"></td>
                <td className="border border-gray-300 px-2 py-1"></td>
                <td className="border border-gray-300 px-2 py-1"></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer Section */}
        <div className="mt-4 flex justify-between items-center">
          <div>
            <label className="font-semibold">Grand Total:</label>
            <span className="ml-2 border border-gray-300 px-4 py-2">0</span>
          </div>
          <div className="flex gap-2">
            <button className="bg-save text-white px-4 py-2 rounded">
              Save
            </button>
            <button className="bg-modify text-white px-4 py-2 rounded">
              Modify
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Print
            </button>
            <button className="bg-cancel text-white px-4 py-2 rounded">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentVoucher;
